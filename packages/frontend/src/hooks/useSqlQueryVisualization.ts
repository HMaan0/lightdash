import {
    ChartType,
    DimensionType,
    FieldType,
    MetricType,
    SupportedDbtAdapter,
    friendlyName,
    getItemId,
    type ApiQueryResults,
    type ChartConfig,
    type CompiledDimension,
    type CompiledMetric,
    type CreateSavedChartVersion,
    type Explore,
    type FieldId,
} from '@lightdash/common';
import { useCallback, useMemo, useState } from 'react';
import { getValidChartConfig } from '../providers/Explorer/utils';
import { type useSqlQueryMutation } from './useSqlQuery';
import { type SqlRunnerState } from './useSqlRunnerRoute';

const SQL_RESULTS_TABLE_NAME = 'sql_runner';

type Args = {
    initialState: SqlRunnerState['createSavedChart'];
    sqlQueryMutation: ReturnType<typeof useSqlQueryMutation>;
};

const useSqlQueryVisualization = ({
    initialState,
    sqlQueryMutation: { data },
}: Args) => {
    const fields = useMemo(
        () =>
            Object.entries(data?.fields || []).reduce<{
                sqlQueryDimensions: Record<FieldId, CompiledDimension>;
                sqlQueryMetrics: Record<FieldId, CompiledMetric>;
            }>(
                (acc, [key, { type }]) => {
                    if (type === DimensionType.NUMBER) {
                        const metric: CompiledMetric = {
                            isAutoGenerated: false,
                            fieldType: FieldType.METRIC,
                            type: MetricType.NUMBER,
                            name: key,
                            label: friendlyName(key),
                            table: SQL_RESULTS_TABLE_NAME,
                            tableLabel: '',
                            sql: '',
                            compiledSql: '',
                            tablesReferences: [SQL_RESULTS_TABLE_NAME],
                            hidden: false,
                        };
                        return {
                            ...acc,
                            sqlQueryMetrics: {
                                ...acc.sqlQueryMetrics,
                                [getItemId(metric)]: metric,
                            },
                        };
                    } else {
                        const dimension: CompiledDimension = {
                            fieldType: FieldType.DIMENSION,
                            type,
                            name: key,
                            label: friendlyName(key),
                            table: SQL_RESULTS_TABLE_NAME,
                            tableLabel: '',
                            sql: '',
                            compiledSql: '',
                            tablesReferences: [SQL_RESULTS_TABLE_NAME],
                            hidden: false,
                        };
                        return {
                            ...acc,
                            sqlQueryDimensions: {
                                ...acc.sqlQueryDimensions,
                                [getItemId(dimension)]: dimension,
                            },
                        };
                    }
                },
                { sqlQueryDimensions: {}, sqlQueryMetrics: {} },
            ),
        [data],
    );

    const [dimensionKeys, metricKeys]: [string[], string[]] = useMemo(() => {
        return [
            Object.keys(fields.sqlQueryDimensions),
            Object.keys(fields.sqlQueryMetrics),
        ];
    }, [fields]);

    const resultsData: ApiQueryResults | undefined = useMemo(
        () =>
            data?.rows
                ? {
                      metricQuery: {
                          exploreName: SQL_RESULTS_TABLE_NAME,
                          dimensions: dimensionKeys,
                          metrics: metricKeys,
                          filters: {},
                          sorts: [],
                          limit: 0,
                          tableCalculations: [],
                      },
                      cacheMetadata: {
                          cacheHit: false,
                      },
                      rows: data.rows.map((row) =>
                          Object.keys(row).reduce((acc, columnName) => {
                              const raw = row[columnName];
                              return {
                                  ...acc,
                                  [`${SQL_RESULTS_TABLE_NAME}_${columnName}`]: {
                                      value: {
                                          raw,
                                          formatted: `${raw}`,
                                      },
                                  },
                              };
                          }, {}),
                      ),
                      fields: {
                          ...fields.sqlQueryDimensions,
                          ...fields.sqlQueryMetrics,
                      },
                  }
                : undefined,
        [data, dimensionKeys, metricKeys, fields],
    );
    const explore: Explore = useMemo(
        () => ({
            name: SQL_RESULTS_TABLE_NAME,
            label: '',
            tags: [],
            baseTable: SQL_RESULTS_TABLE_NAME,
            joinedTables: [],
            tables: {
                [SQL_RESULTS_TABLE_NAME]: {
                    name: SQL_RESULTS_TABLE_NAME,
                    label: '',
                    database: '',
                    schema: '',
                    sqlTable: '',
                    dimensions: fields.sqlQueryDimensions,
                    metrics: fields.sqlQueryMetrics,
                    lineageGraph: {},
                },
            },
            targetDatabase: SupportedDbtAdapter.POSTGRES,
        }),
        [fields],
    );

    const [chartConfig, setChartConfig] = useState<ChartConfig>(
        initialState?.chartConfig ||
            getValidChartConfig(ChartType.CARTESIAN, undefined),
    );

    const [pivotFields, setPivotFields] = useState<string[] | undefined>(
        initialState?.pivotConfig?.columns,
    );

    const handleChartTypeChange = useCallback(
        (chartType: ChartType) => {
            setChartConfig(getValidChartConfig(chartType, chartConfig));
        },
        [chartConfig],
    );

    const createSavedChart: CreateSavedChartVersion | undefined = useMemo(
        () =>
            resultsData
                ? {
                      tableName: explore.name,
                      metricQuery: resultsData.metricQuery,
                      pivotConfig: pivotFields
                          ? {
                                columns: pivotFields,
                            }
                          : undefined,
                      chartConfig,
                      tableConfig: {
                          columnOrder: [...dimensionKeys, ...metricKeys],
                      },
                  }
                : undefined,
        [
            chartConfig,
            dimensionKeys,
            metricKeys,
            explore.name,
            pivotFields,
            resultsData,
        ],
    );

    return {
        initialPivotDimensions: initialState?.pivotConfig?.columns,
        fieldsMap: { ...fields.sqlQueryDimensions, ...fields.sqlQueryMetrics },
        resultsData,
        columnOrder: [...dimensionKeys, ...metricKeys],
        createSavedChart,
        chartConfig,
        setChartType: handleChartTypeChange,
        setChartConfig,
        setPivotFields,
    };
};

export default useSqlQueryVisualization;
