/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { ExpressTemplateService, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ValidationController } from './../controllers/validationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controllers/userController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserAttributesController } from './../controllers/userAttributesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SshController } from './../controllers/sshController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SqlRunnerController } from './../controllers/sqlRunnerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SpotlightController } from './../controllers/spotlightController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SpaceController } from './../controllers/spaceController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SlackController } from './../controllers/slackController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ShareController } from './../controllers/shareController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SchedulerController } from './../controllers/schedulerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RunViewChartQueryController } from './../controllers/runQueryController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SavedChartController } from './../controllers/savedChartController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProjectController } from './../controllers/projectController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PinningController } from './../controllers/pinningController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrganizationController } from './../controllers/organizationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NotificationsController } from './../controllers/notificationsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MetricsExplorerController } from './../controllers/metricsExplorerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GroupsController } from './../controllers/groupsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GoogleDriveController } from './../controllers/googleDriveController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GithubInstallController } from './../controllers/githubController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GitIntegrationController } from './../controllers/gitIntegrationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ExploreController } from './../controllers/exploreController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DashboardController } from './../controllers/dashboardController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CsvController } from './../controllers/csvController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CommentsController } from './../controllers/commentsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CatalogController } from './../controllers/catalogController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SemanticLayerController } from './../controllers/v2/SemanticLayerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FeatureFlagController } from './../controllers/v2/FeatureFlagController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { IocContainer, IocContainerFactory } from '@tsoa/runtime';
import type {
    Request as ExRequest,
    RequestHandler,
    Response as ExResponse,
    Router,
} from 'express';
import { ContentController } from './../controllers/v2/ContentController';
import { iocContainer } from './../services/tsoaServiceContainer';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    ApiErrorPayload: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                error: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        data: { dataType: 'any' },
                        message: { dataType: 'string' },
                        name: { dataType: 'string', required: true },
                        statusCode: { dataType: 'double', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['error'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiJobScheduledResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        jobId: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationTarget: {
        dataType: 'refEnum',
        enums: ['charts', 'dashboards', 'tables'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorType: {
        dataType: 'refEnum',
        enums: [
            'chart',
            'sorting',
            'filter',
            'metric',
            'model',
            'dimension',
            'custom metric',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationSourceType: {
        dataType: 'refEnum',
        enums: ['chart', 'dashboard', 'table'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationResponseBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                source: { ref: 'ValidationSourceType' },
                spaceUuid: { dataType: 'string' },
                projectUuid: { dataType: 'string', required: true },
                errorType: { ref: 'ValidationErrorType', required: true },
                error: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                createdAt: { dataType: 'datetime', required: true },
                validationId: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartKind: {
        dataType: 'refEnum',
        enums: [
            'line',
            'horizontal_bar',
            'vertical_bar',
            'scatter',
            'area',
            'mixed',
            'pie',
            'table',
            'big_number',
            'funnel',
            'custom',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorChartResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ValidationResponseBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartName: { dataType: 'string' },
                        chartViews: { dataType: 'double', required: true },
                        lastUpdatedAt: { dataType: 'datetime' },
                        lastUpdatedBy: { dataType: 'string' },
                        fieldName: { dataType: 'string' },
                        chartKind: { ref: 'ChartKind' },
                        chartUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorDashboardResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ValidationResponseBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardViews: { dataType: 'double', required: true },
                        lastUpdatedAt: { dataType: 'datetime' },
                        lastUpdatedBy: { dataType: 'string' },
                        fieldName: { dataType: 'string' },
                        chartName: { dataType: 'string' },
                        dashboardUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ValidationResponseBase.Exclude_keyofValidationResponseBase.name__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                validationId: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
                error: { dataType: 'string', required: true },
                errorType: { ref: 'ValidationErrorType', required: true },
                projectUuid: { dataType: 'string', required: true },
                spaceUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                source: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'ValidationSourceType' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_ValidationResponseBase.name_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ValidationResponseBase.Exclude_keyofValidationResponseBase.name__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorTableResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Omit_ValidationResponseBase.name_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        name: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ValidationErrorChartResponse' },
                { ref: 'ValidationErrorDashboardResponse' },
                { ref: 'ValidationErrorTableResponse' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiValidateResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ValidationResponse' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiValidationDismissResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberRole: {
        dataType: 'refEnum',
        enums: [
            'member',
            'viewer',
            'interactive_viewer',
            'editor',
            'developer',
            'admin',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LightdashUser: {
        dataType: 'refObject',
        properties: {
            userUuid: { dataType: 'string', required: true },
            email: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'undefined' }],
                required: true,
            },
            firstName: { dataType: 'string', required: true },
            lastName: { dataType: 'string', required: true },
            organizationUuid: { dataType: 'string' },
            organizationName: { dataType: 'string' },
            organizationCreatedAt: { dataType: 'datetime' },
            isTrackingAnonymized: { dataType: 'boolean', required: true },
            isMarketingOptedIn: { dataType: 'boolean', required: true },
            isSetupComplete: { dataType: 'boolean', required: true },
            role: { ref: 'OrganizationMemberRole' },
            createdAt: { dataType: 'datetime', required: true },
            updatedAt: { dataType: 'datetime', required: true },
            isActive: { dataType: 'boolean', required: true },
            isPending: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetAuthenticatedUserResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'LightdashUser', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiRegisterUserResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'LightdashUser', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ActivateUser: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                password: { dataType: 'string', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ActivateUserWithInviteCode: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ActivateUser' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        inviteCode: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Email: {
        dataType: 'refAlias',
        type: {
            dataType: 'string',
            validators: {
                pattern: {
                    value: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                },
            },
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateUserArgs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                password: { dataType: 'string', required: true },
                email: { ref: 'Email', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    RegisterOrActivateUser: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ActivateUserWithInviteCode' },
                { ref: 'CreateUserArgs' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailOneTimePassword: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                numberOfAttempts: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailStatus: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                otp: { ref: 'EmailOneTimePassword' },
                isVerified: { dataType: 'boolean', required: true },
                email: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailOneTimePasswordExpiring: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'EmailOneTimePassword' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        isMaxAttempts: { dataType: 'boolean', required: true },
                        isExpired: { dataType: 'boolean', required: true },
                        expiresAt: { dataType: 'datetime', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailStatusExpiring: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'EmailStatus' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        otp: { ref: 'EmailOneTimePasswordExpiring' },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiEmailStatusResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'EmailStatusExpiring', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAllowedOrganization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                membersCount: { dataType: 'double', required: true },
                name: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUserAllowedOrganizationsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'UserAllowedOrganization',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSuccessEmpty: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'undefined', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.POSTGRES': {
        dataType: 'refEnum',
        enums: ['postgres'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.REDSHIFT': {
        dataType: 'refEnum',
        enums: ['redshift'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.SNOWFLAKE': {
        dataType: 'refEnum',
        enums: ['snowflake'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.TRINO': {
        dataType: 'refEnum',
        enums: ['trino'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateRedshiftCredentials-or-CreatePostgresCredentials-or-CreateSnowflakeCredentials-or-CreateTrinoCredentials.type-or-user_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WarehouseTypes.POSTGRES' },
                            { ref: 'WarehouseTypes.REDSHIFT' },
                            { ref: 'WarehouseTypes.SNOWFLAKE' },
                            { ref: 'WarehouseTypes.TRINO' },
                        ],
                        required: true,
                    },
                    user: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.BIGQUERY': {
        dataType: 'refEnum',
        enums: ['bigquery'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateBigqueryCredentials.type_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.BIGQUERY', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.DATABRICKS': {
        dataType: 'refEnum',
        enums: ['databricks'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDatabricksCredentials.type_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.DATABRICKS', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserWarehouseCredentials: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                credentials: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_CreateRedshiftCredentials-or-CreatePostgresCredentials-or-CreateSnowflakeCredentials-or-CreateTrinoCredentials.type-or-user_',
                        },
                        { ref: 'Pick_CreateBigqueryCredentials.type_' },
                        { ref: 'Pick_CreateDatabricksCredentials.type_' },
                    ],
                    required: true,
                },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                name: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateRedshiftCredentials.type-or-user-or-password_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.REDSHIFT', required: true },
                user: { dataType: 'string', required: true },
                password: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreatePostgresCredentials.type-or-user-or-password_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.POSTGRES', required: true },
                user: { dataType: 'string', required: true },
                password: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateSnowflakeCredentials.type-or-user-or-password_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.SNOWFLAKE', required: true },
                user: { dataType: 'string', required: true },
                password: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateTrinoCredentials.type-or-user-or-password_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.TRINO', required: true },
                user: { dataType: 'string', required: true },
                password: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.string_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { dataType: 'string' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateBigqueryCredentials.type-or-keyfileContents_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.BIGQUERY', required: true },
                keyfileContents: {
                    ref: 'Record_string.string_',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDatabricksCredentials.type-or-personalAccessToken_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'WarehouseTypes.DATABRICKS', required: true },
                personalAccessToken: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpsertUserWarehouseCredentials: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                credentials: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_CreateRedshiftCredentials.type-or-user-or-password_',
                        },
                        {
                            ref: 'Pick_CreatePostgresCredentials.type-or-user-or-password_',
                        },
                        {
                            ref: 'Pick_CreateSnowflakeCredentials.type-or-user-or-password_',
                        },
                        {
                            ref: 'Pick_CreateTrinoCredentials.type-or-user-or-password_',
                        },
                        {
                            ref: 'Pick_CreateBigqueryCredentials.type-or-keyfileContents_',
                        },
                        {
                            ref: 'Pick_CreateDatabricksCredentials.type-or-personalAccessToken_',
                        },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OpenIdIdentityIssuerType: {
        dataType: 'refEnum',
        enums: ['google', 'okta', 'oneLogin', 'azuread', 'oidc'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LocalIssuerTypes: {
        dataType: 'refEnum',
        enums: ['email', 'apiToken'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LoginOptionTypes: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'OpenIdIdentityIssuerType' },
                { ref: 'LocalIssuerTypes' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LoginOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                redirectUri: { dataType: 'string' },
                forceRedirect: { dataType: 'boolean' },
                showOptions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'LoginOptionTypes' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetLoginOptionsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'LoginOptions', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PersonalAccessToken: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                description: { dataType: 'string', required: true },
                expiresAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                rotatedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                lastUsedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PersonalAccessTokenWithToken: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'PersonalAccessToken' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        token: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAttributeValue: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GroupAttributeValue: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'string', required: true },
                groupUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAttribute: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                attributeDefault: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                groups: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'GroupAttributeValue' },
                    required: true,
                },
                users: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'UserAttributeValue' },
                    required: true,
                },
                description: { dataType: 'string' },
                organizationUuid: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                createdAt: { dataType: 'datetime', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUserAttributesResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'UserAttribute' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateUserAttributeResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'UserAttribute', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_UserAttribute.name-or-description-or-attributeDefault_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                attributeDefault: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_UserAttributeValue.Exclude_keyofUserAttributeValue.email__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
                value: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_UserAttributeValue.email_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_UserAttributeValue.Exclude_keyofUserAttributeValue.email__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateUserAttributeValue: {
        dataType: 'refAlias',
        type: { ref: 'Omit_UserAttributeValue.email_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateGroupAttributeValue: {
        dataType: 'refAlias',
        type: { ref: 'GroupAttributeValue', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateUserAttribute: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_UserAttribute.name-or-description-or-attributeDefault_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        groups: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'CreateGroupAttributeValue',
                            },
                            required: true,
                        },
                        users: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'CreateUserAttributeValue',
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SshKeyPair.publicKey_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                publicKey: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSshKeyPairResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Pick_SshKeyPair.publicKey_', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PartitionType: {
        dataType: 'refEnum',
        enums: ['DATE', 'RANGE'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PartitionColumn: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                field: { dataType: 'string', required: true },
                partitionType: { ref: 'PartitionType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WarehouseTablesCatalog: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {},
                additionalProperties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {},
                    additionalProperties: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            partitionColumn: { ref: 'PartitionColumn' },
                        },
                    },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiWarehouseTablesCatalog: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'WarehouseTablesCatalog', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DimensionType: {
        dataType: 'refEnum',
        enums: ['string', 'number', 'timestamp', 'date', 'boolean'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WarehouseTableSchema: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'DimensionType' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiWarehouseTableFields: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'WarehouseTableSchema', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SqlRunnerBody: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                limit: { dataType: 'double' },
                sql: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizIndexType: {
        dataType: 'refEnum',
        enums: ['time', 'category'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PivotIndexColum: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        type: { ref: 'VizIndexType', required: true },
                        reference: { dataType: 'string', required: true },
                    },
                },
                { dataType: 'undefined' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizAggregationOptions: {
        dataType: 'refEnum',
        enums: ['sum', 'count', 'avg', 'min', 'max', 'any'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SortByDirection: {
        dataType: 'refEnum',
        enums: ['ASC', 'DESC'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizSortBy: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                direction: { ref: 'SortByDirection', required: true },
                reference: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSqlRunnerPivotQueryPayload: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                sortBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'VizSortBy' },
                        },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                groupByColumns: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: {
                                dataType: 'nestedObjectLiteral',
                                nestedProperties: {
                                    reference: {
                                        dataType: 'string',
                                        required: true,
                                    },
                                },
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                valuesColumns: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            aggregation: {
                                ref: 'VizAggregationOptions',
                                required: true,
                            },
                            reference: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                indexColumn: { ref: 'PivotIndexColum', required: true },
                savedSqlUuid: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SqlRunnerPivotQueryBody: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SqlRunnerBody' },
                { ref: 'ApiSqlRunnerPivotQueryPayload' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizBaseConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'ChartKind', required: true },
                metadata: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        version: { dataType: 'double', required: true },
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartKind.VERTICAL_BAR': {
        dataType: 'refEnum',
        enums: ['vertical_bar'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartKind.LINE': {
        dataType: 'refEnum',
        enums: ['line'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PivotChartLayout: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                sortBy: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'VizSortBy' },
                },
                groupBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: {
                                dataType: 'nestedObjectLiteral',
                                nestedProperties: {
                                    reference: {
                                        dataType: 'string',
                                        required: true,
                                    },
                                },
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                y: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            aggregation: {
                                ref: 'VizAggregationOptions',
                                required: true,
                            },
                            reference: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                x: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                type: { ref: 'VizIndexType', required: true },
                                reference: {
                                    dataType: 'string',
                                    required: true,
                                },
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Format: {
        dataType: 'refEnum',
        enums: ['km', 'mi', 'usd', 'gbp', 'eur', 'jpy', 'id', 'percent'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CartesianSeriesType.LINE': {
        dataType: 'refEnum',
        enums: ['line'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CartesianSeriesType.BAR': {
        dataType: 'refEnum',
        enums: ['bar'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValueLabelPositionOptions: {
        dataType: 'refEnum',
        enums: ['hidden', 'top', 'bottom', 'left', 'right', 'inside'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AxisSide: {
        dataType: 'refEnum',
        enums: [0, 1],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CartesianChartDisplay: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                stack: { dataType: 'boolean' },
                legend: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        align: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'enum', enums: ['start'] },
                                { dataType: 'enum', enums: ['center'] },
                                { dataType: 'enum', enums: ['end'] },
                            ],
                            required: true,
                        },
                        position: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'enum', enums: ['top'] },
                                { dataType: 'enum', enums: ['bottom'] },
                                { dataType: 'enum', enums: ['left'] },
                                { dataType: 'enum', enums: ['right'] },
                            ],
                            required: true,
                        },
                    },
                },
                series: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {},
                    additionalProperties: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            whichYAxis: { ref: 'AxisSide' },
                            valueLabelPosition: {
                                ref: 'ValueLabelPositionOptions',
                            },
                            type: {
                                dataType: 'union',
                                subSchemas: [
                                    { ref: 'CartesianSeriesType.LINE' },
                                    { ref: 'CartesianSeriesType.BAR' },
                                ],
                            },
                            color: { dataType: 'string' },
                            yAxisIndex: { dataType: 'double' },
                            format: { ref: 'Format' },
                            label: { dataType: 'string' },
                        },
                    },
                },
                yAxis: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            format: { ref: 'Format' },
                            position: { dataType: 'string' },
                            label: { dataType: 'string' },
                        },
                    },
                },
                xAxis: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        type: { ref: 'VizIndexType' },
                        label: { dataType: 'string' },
                    },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizCartesianChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'VizBaseConfig' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        display: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'CartesianChartDisplay' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        fieldConfig: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'PivotChartLayout' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        type: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartKind.VERTICAL_BAR' },
                                { ref: 'ChartKind.LINE' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartKind.PIE': {
        dataType: 'refEnum',
        enums: ['pie'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizPieChartDisplay: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { isDonut: { dataType: 'boolean' } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizPieChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'VizBaseConfig' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        display: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'VizPieChartDisplay' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        fieldConfig: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'PivotChartLayout' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        type: { ref: 'ChartKind.PIE', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartKind.TABLE': {
        dataType: 'refEnum',
        enums: ['table'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizColumnConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                aggregation: { ref: 'VizAggregationOptions' },
                order: { dataType: 'double' },
                frozen: { dataType: 'boolean', required: true },
                label: { dataType: 'string', required: true },
                reference: { dataType: 'string', required: true },
                visible: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizColumnsConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'VizColumnConfig' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizTableDisplay: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizTableConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'VizBaseConfig' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        display: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'VizTableDisplay' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        columns: { ref: 'VizColumnsConfig', required: true },
                        type: { ref: 'ChartKind.TABLE', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_LightdashUser.userUuid-or-firstName-or-lastName_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                lastName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceMemberRole: {
        dataType: 'refEnum',
        enums: ['viewer', 'editor', 'admin'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectMemberRole: {
        dataType: 'refEnum',
        enums: ['viewer', 'interactive_viewer', 'editor', 'developer', 'admin'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceShare: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                inheritedFrom: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['organization'] },
                        { dataType: 'enum', enums: ['project'] },
                        { dataType: 'enum', enums: ['group'] },
                        { dataType: 'enum', enums: ['space_group'] },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                inheritedRole: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'OrganizationMemberRole' },
                        { ref: 'ProjectMemberRole' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                projectRole: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'ProjectMemberRole' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                hasDirectAccess: { dataType: 'boolean', required: true },
                role: { ref: 'SpaceMemberRole', required: true },
                email: { dataType: 'string', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpaceSummary.uuid-or-name-or-isPrivate-or-userAccess_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                isPrivate: { dataType: 'boolean', required: true },
                userAccess: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'SpaceShare' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.uuid-or-name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Project.projectUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Organization.organizationUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastViewedAt: { dataType: 'datetime', required: true },
                firstViewedAt: { dataType: 'datetime', required: true },
                views: { dataType: 'double', required: true },
                organization: {
                    ref: 'Pick_Organization.organizationUuid_',
                    required: true,
                },
                project: { ref: 'Pick_Project.projectUuid_', required: true },
                dashboard: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'Pick_Dashboard.uuid-or-name_' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                space: {
                    ref: 'Pick_SpaceSummary.uuid-or-name-or-isPrivate-or-userAccess_',
                    required: true,
                },
                lastUpdatedBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                lastUpdatedAt: { dataType: 'datetime', required: true },
                createdBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                chartKind: { ref: 'ChartKind', required: true },
                config: {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'VizBaseConfig' },
                        {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'VizCartesianChartConfig' },
                                { ref: 'VizPieChartConfig' },
                                { ref: 'VizTableConfig' },
                            ],
                        },
                    ],
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sql: { dataType: 'string', required: true },
                slug: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
                savedSqlUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SqlChart', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        slug: { dataType: 'string', required: true },
                        savedSqlUuid: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizBarChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'VizBaseConfig' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        display: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'CartesianChartDisplay' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        fieldConfig: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'PivotChartLayout' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        type: { ref: 'ChartKind.VERTICAL_BAR', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizLineChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'VizBaseConfig' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        display: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'CartesianChartDisplay' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        fieldConfig: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'PivotChartLayout' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        type: { ref: 'ChartKind.LINE', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllVizChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'VizBarChartConfig' },
                { ref: 'VizLineChartConfig' },
                { ref: 'VizPieChartConfig' },
                { ref: 'VizTableConfig' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceUuid: { dataType: 'string', required: true },
                config: { ref: 'AllVizChartConfig', required: true },
                limit: { dataType: 'double', required: true },
                sql: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUpdateSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        savedSqlVersionUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        savedSqlUuid: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateUnversionedSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceUuid: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateVersionedSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'AllVizChartConfig', required: true },
                limit: { dataType: 'double', required: true },
                sql: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateSqlChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                versionedData: { ref: 'UpdateVersionedSqlChart' },
                unversionedData: { ref: 'UpdateUnversionedSqlChart' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Explore.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateVirtualView: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Pick_Explore.name_', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    VizColumn: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'DimensionType' },
                reference: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateVirtualViewPayload: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                columns: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'VizColumn' },
                    required: true,
                },
                sql: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateVirtualViewPayload: {
        dataType: 'refAlias',
        type: { ref: 'CreateVirtualViewPayload', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGithubDbtWritePreview: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        owner: { dataType: 'string', required: true },
                        files: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        path: { dataType: 'string', required: true },
                        repo: { dataType: 'string', required: true },
                        url: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PullRequestCreated: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                prUrl: { dataType: 'string', required: true },
                prTitle: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGithubDbtWriteBack: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PullRequestCreated', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpotlightTableColumns: {
        dataType: 'refEnum',
        enums: [
            'label',
            'tableLabel',
            'description',
            'categories',
            'chartUsage',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ColumnConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    isVisible: { dataType: 'boolean', required: true },
                    column: { ref: 'SpotlightTableColumns', required: true },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpotlightTableConfig.columnConfig_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                columnConfig: { ref: 'ColumnConfig', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetSpotlightTableConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'Pick_SpotlightTableConfig.columnConfig_',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.uuid-or-name-or-description-or-spaceName-or-spaceUuid-or-projectUuid-or-organizationUuid-or-pinnedListUuid-or-dashboardUuid-or-dashboardName-or-slug_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    organizationUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    slug: { dataType: 'string', required: true },
                    spaceName: { dataType: 'string', required: true },
                    dashboardUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    dashboardName: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartType: {
        dataType: 'refEnum',
        enums: ['cartesian', 'table', 'big_number', 'pie', 'funnel', 'custom'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartSourceType: {
        dataType: 'refEnum',
        enums: ['dbt_explore', 'sql', 'semantic_layer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartSummary: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_SavedChart.uuid-or-name-or-description-or-spaceName-or-spaceUuid-or-projectUuid-or-organizationUuid-or-pinnedListUuid-or-dashboardUuid-or-dashboardName-or-slug_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        source: { ref: 'ChartSourceType' },
                        chartKind: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartKind' },
                                { dataType: 'undefined' },
                            ],
                        },
                        chartType: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartType' },
                                { dataType: 'undefined' },
                            ],
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdatedByUser: {
        dataType: 'refObject',
        properties: {
            userUuid: { dataType: 'string', required: true },
            firstName: { dataType: 'string', required: true },
            lastName: { dataType: 'string', required: true },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.updatedAt-or-updatedByUser-or-pinnedListOrder_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                updatedAt: { dataType: 'datetime', required: true },
                updatedByUser: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'UpdatedByUser' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ViewStatistics: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                firstViewedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                views: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ValidationResponse.error-or-createdAt-or-validationId_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                validationId: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
                error: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationSummary: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ValidationResponse.error-or-createdAt-or-validationId_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ChartSummary' },
                {
                    ref: 'Pick_SavedChart.updatedAt-or-updatedByUser-or-pinnedListOrder_',
                },
                { ref: 'ViewStatistics' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        validationErrors: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'ValidationSummary',
                            },
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.uuid-or-name-or-description-or-updatedAt-or-projectUuid-or-updatedByUser-or-organizationUuid-or-spaceUuid-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    organizationUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'UpdatedByUser' },
                            { dataType: 'undefined' },
                        ],
                    },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'datetime' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardBasicDetails: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Dashboard.uuid-or-name-or-description-or-updatedAt-or-projectUuid-or-updatedByUser-or-organizationUuid-or-spaceUuid-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        validationErrors: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'ValidationSummary',
                            },
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceDashboard: {
        dataType: 'refAlias',
        type: { ref: 'DashboardBasicDetails', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceGroup: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceRole: { ref: 'SpaceMemberRole', required: true },
                groupName: { dataType: 'string', required: true },
                groupUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Space: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                slug: { dataType: 'string', required: true },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                groupsAccess: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceGroup' },
                    required: true,
                },
                access: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceShare' },
                    required: true,
                },
                dashboards: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceDashboard' },
                    required: true,
                },
                projectUuid: { dataType: 'string', required: true },
                queries: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceQuery' },
                    required: true,
                },
                isPrivate: { dataType: 'boolean', required: true },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSpaceResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Space', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpaceShare.userUuid-or-role_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
                role: { ref: 'SpaceMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateSpace: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                access: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SpaceShare.userUuid-or-role_',
                    },
                },
                isPrivate: { dataType: 'boolean' },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateSpace: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                isPrivate: { dataType: 'boolean', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AddSpaceUserAccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceRole: { ref: 'SpaceMemberRole', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AddSpaceGroupAccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceRole: { ref: 'SpaceMemberRole', required: true },
                groupUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SlackChannel: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSlackChannelsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'SlackChannel',
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSlackCustomSettingsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'void', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SlackChannelProjectMapping: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                slackChannelId: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SlackAppCustomSettings: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                slackChannelProjectMappings: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'SlackChannelProjectMapping',
                    },
                },
                appProfilePhotoUrl: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                notificationChannel: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ShareUrl: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                host: { dataType: 'string' },
                url: { dataType: 'string' },
                shareUrl: { dataType: 'string' },
                organizationUuid: { dataType: 'string' },
                createdByUserUuid: { dataType: 'string' },
                params: { dataType: 'string', required: true },
                path: { dataType: 'string', required: true },
                nanoid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiShareResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ShareUrl', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ShareUrl.path-or-params_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                path: { dataType: 'string', required: true },
                params: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateShareUrl: {
        dataType: 'refAlias',
        type: { ref: 'Pick_ShareUrl.path-or-params_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerFormat: {
        dataType: 'refEnum',
        enums: ['csv', 'image', 'gsheets'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerCsvOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                limit: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['table'] },
                        { dataType: 'enum', enums: ['all'] },
                        { dataType: 'double' },
                    ],
                    required: true,
                },
                formatted: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerImageOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { withPdf: { dataType: 'boolean' } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerGsheetsOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                url: { dataType: 'string', required: true },
                gdriveOrganizationName: { dataType: 'string', required: true },
                gdriveName: { dataType: 'string', required: true },
                gdriveId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SchedulerCsvOptions' },
                { ref: 'SchedulerImageOptions' },
                { ref: 'SchedulerGsheetsOptions' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ThresholdOperator: {
        dataType: 'refEnum',
        enums: ['greaterThan', 'lessThan', 'increasedBy', 'decreasedBy'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ThresholdOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'double', required: true },
                fieldId: { dataType: 'string', required: true },
                operator: { ref: 'ThresholdOperator', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NotificationFrequency: {
        dataType: 'refEnum',
        enums: ['always', 'once'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                includeLinks: { dataType: 'boolean', required: true },
                notificationFrequency: { ref: 'NotificationFrequency' },
                enabled: { dataType: 'boolean', required: true },
                thresholds: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ThresholdOptions' },
                },
                options: { ref: 'SchedulerOptions', required: true },
                dashboardUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                savedChartUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                timezone: { dataType: 'string' },
                cron: { dataType: 'string', required: true },
                format: { ref: 'SchedulerFormat', required: true },
                createdBy: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                message: { dataType: 'string' },
                name: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartScheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SchedulerBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardUuid: {
                            dataType: 'enum',
                            enums: [null],
                            required: true,
                        },
                        savedChartUuid: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardFieldTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tableName: { dataType: 'string', required: true },
                fieldId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalOperator: {
        dataType: 'refEnum',
        enums: [
            'isNull',
            'notNull',
            'equals',
            'notEquals',
            'startsWith',
            'endsWith',
            'include',
            'doesNotInclude',
            'lessThan',
            'lessThanOrEqual',
            'greaterThan',
            'greaterThanOrEqual',
            'inThePast',
            'notInThePast',
            'inTheNext',
            'inTheCurrent',
            'notInTheCurrent',
            'inBetween',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'FilterRule_ConditionalOperator.DashboardFieldTarget.any.any_': {
        dataType: 'refObject',
        properties: {
            values: { dataType: 'array', array: { dataType: 'any' } },
            operator: { ref: 'ConditionalOperator', required: true },
            id: { dataType: 'string', required: true },
            target: { ref: 'DashboardFieldTarget', required: true },
            settings: { dataType: 'any' },
            disabled: { dataType: 'boolean' },
            required: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTileTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'DashboardFieldTarget' },
                { dataType: 'enum', enums: [false] },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.DashboardTileTarget_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'DashboardTileTarget' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardFilterRule: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'FilterRule_ConditionalOperator.DashboardFieldTarget.any.any_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        label: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'undefined' },
                                { dataType: 'string' },
                            ],
                            required: true,
                        },
                        tileTargets: {
                            ref: 'Record_string.DashboardTileTarget_',
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerFilterRule: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardFilterRule' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        tileTargets: { dataType: 'undefined', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardScheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SchedulerBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        selectedTabs: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                        },
                        customViewportWidth: { dataType: 'double' },
                        filters: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'SchedulerFilterRule',
                            },
                        },
                        dashboardUuid: { dataType: 'string', required: true },
                        savedChartUuid: {
                            dataType: 'enum',
                            enums: [null],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Scheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ChartScheduler' },
                { ref: 'DashboardScheduler' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerSlackTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                channel: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                schedulerSlackTargetUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerEmailTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                recipient: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                schedulerEmailTargetUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerAndTargets: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Scheduler' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        targets: {
                            dataType: 'array',
                            array: {
                                dataType: 'union',
                                subSchemas: [
                                    { ref: 'SchedulerSlackTarget' },
                                    { ref: 'SchedulerEmailTarget' },
                                ],
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerJobStatus: {
        dataType: 'refEnum',
        enums: ['scheduled', 'started', 'completed', 'error'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.any_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { dataType: 'any' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerLog: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                details: { ref: 'Record_string.any_' },
                targetType: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['email'] },
                        { dataType: 'enum', enums: ['slack'] },
                        { dataType: 'enum', enums: ['gsheets'] },
                    ],
                },
                target: { dataType: 'string' },
                status: { ref: 'SchedulerJobStatus', required: true },
                createdAt: { dataType: 'datetime', required: true },
                scheduledTime: { dataType: 'datetime', required: true },
                jobGroup: { dataType: 'string' },
                jobId: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string' },
                task: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'enum',
                            enums: ['handleScheduledDelivery'],
                        },
                        { dataType: 'enum', enums: ['sendEmailNotification'] },
                        { dataType: 'enum', enums: ['sendSlackNotification'] },
                        { dataType: 'enum', enums: ['uploadGsheets'] },
                        { dataType: 'enum', enums: ['downloadCsv'] },
                        { dataType: 'enum', enums: ['uploadGsheetFromQuery'] },
                        {
                            dataType: 'enum',
                            enums: ['createProjectWithCompile'],
                        },
                        { dataType: 'enum', enums: ['compileProject'] },
                        { dataType: 'enum', enums: ['testAndCompileProject'] },
                        { dataType: 'enum', enums: ['validateProject'] },
                        { dataType: 'enum', enums: ['sqlRunner'] },
                        { dataType: 'enum', enums: ['sqlRunnerPivotQuery'] },
                        { dataType: 'enum', enums: ['semanticLayer'] },
                        { dataType: 'enum', enums: ['indexCatalog'] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerWithLogs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                logs: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SchedulerLog' },
                    required: true,
                },
                dashboards: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            dashboardUuid: {
                                dataType: 'string',
                                required: true,
                            },
                            name: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                charts: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            savedChartUuid: {
                                dataType: 'string',
                                required: true,
                            },
                            name: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                users: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            userUuid: { dataType: 'string', required: true },
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                schedulers: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SchedulerAndTargets' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSchedulerLogsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SchedulerWithLogs', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSchedulerAndTargetsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SchedulerAndTargets', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ScheduledJobs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                id: { dataType: 'string', required: true },
                date: { dataType: 'datetime', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiScheduledJobsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ScheduledJobs' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiJobStatusResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        details: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'Record_string.any_' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        status: { ref: 'SchedulerJobStatus', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiTestSchedulerResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        jobId: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FieldId: {
        dataType: 'refAlias',
        type: { dataType: 'string', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FilterGroupResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        or: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        id: { dataType: 'string', required: true },
                    },
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        and: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        id: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FiltersResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tableCalculations: { ref: 'FilterGroupResponse' },
                metrics: { ref: 'FilterGroupResponse' },
                dimensions: { ref: 'FilterGroupResponse' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SortField: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                descending: { dataType: 'boolean', required: true },
                fieldId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomFormatType: {
        dataType: 'refEnum',
        enums: [
            'default',
            'percent',
            'currency',
            'number',
            'id',
            'date',
            'timestamp',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NumberSeparator: {
        dataType: 'refEnum',
        enums: [
            'default',
            'commaPeriod',
            'spacePeriod',
            'periodComma',
            'noSeparatorPeriod',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Compact: {
        dataType: 'refEnum',
        enums: ['thousands', 'millions', 'billions', 'trillions'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompactOrAlias: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'Compact' },
                {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['K'] },
                        { dataType: 'enum', enums: ['thousand'] },
                        { dataType: 'enum', enums: ['M'] },
                        { dataType: 'enum', enums: ['million'] },
                        { dataType: 'enum', enums: ['B'] },
                        { dataType: 'enum', enums: ['billion'] },
                        { dataType: 'enum', enums: ['T'] },
                        { dataType: 'enum', enums: ['trillion'] },
                    ],
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TimeFrames: {
        dataType: 'refEnum',
        enums: [
            'RAW',
            'YEAR',
            'QUARTER',
            'MONTH',
            'WEEK',
            'DAY',
            'HOUR',
            'MINUTE',
            'SECOND',
            'MILLISECOND',
            'DAY_OF_WEEK_INDEX',
            'DAY_OF_MONTH_NUM',
            'DAY_OF_YEAR_NUM',
            'WEEK_NUM',
            'MONTH_NUM',
            'QUARTER_NUM',
            'YEAR_NUM',
            'DAY_OF_WEEK_NAME',
            'MONTH_NAME',
            'QUARTER_NAME',
            'HOUR_OF_DAY_NUM',
            'MINUTE_OF_HOUR_NUM',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomFormat: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'CustomFormatType', required: true },
            round: {
                dataType: 'union',
                subSchemas: [{ dataType: 'double' }, { dataType: 'undefined' }],
            },
            separator: { ref: 'NumberSeparator' },
            currency: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'undefined' }],
            },
            compact: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'CompactOrAlias' },
                    { dataType: 'undefined' },
                ],
            },
            prefix: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'undefined' }],
            },
            suffix: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'undefined' }],
            },
            timeInterval: { ref: 'TimeFrames' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableCalculationType: {
        dataType: 'refEnum',
        enums: ['number', 'string', 'date', 'timestamp', 'boolean'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableCalculation: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'TableCalculationType' },
                format: { ref: 'CustomFormat' },
                sql: { dataType: 'string', required: true },
                displayName: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                index: { dataType: 'double' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricType: {
        dataType: 'refEnum',
        enums: [
            'percentile',
            'average',
            'count',
            'count_distinct',
            'sum',
            'min',
            'max',
            'number',
            'median',
            'string',
            'date',
            'timestamp',
            'boolean',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricFilterRule: {
        dataType: 'refObject',
        properties: {
            values: { dataType: 'array', array: { dataType: 'any' } },
            operator: { ref: 'ConditionalOperator', required: true },
            id: { dataType: 'string', required: true },
            target: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    fieldRef: { dataType: 'string', required: true },
                },
                required: true,
            },
            settings: { dataType: 'any' },
            disabled: { dataType: 'boolean' },
            required: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AdditionalMetric: {
        dataType: 'refObject',
        properties: {
            label: { dataType: 'string' },
            type: { ref: 'MetricType', required: true },
            description: { dataType: 'string' },
            sql: { dataType: 'string', required: true },
            hidden: { dataType: 'boolean' },
            round: { dataType: 'double' },
            compact: { ref: 'CompactOrAlias' },
            format: { ref: 'Format' },
            table: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            index: { dataType: 'double' },
            filters: {
                dataType: 'array',
                array: { dataType: 'refObject', ref: 'MetricFilterRule' },
            },
            baseDimensionName: { dataType: 'string' },
            uuid: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'string' },
                    { dataType: 'enum', enums: [null] },
                ],
            },
            percentile: { dataType: 'double' },
            formatOptions: { ref: 'CustomFormat' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CustomDimensionType.BIN': {
        dataType: 'refEnum',
        enums: ['bin'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BinType: {
        dataType: 'refEnum',
        enums: ['fixed_number', 'fixed_width', 'custom_range'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BinRange: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                to: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                from: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomDimensionType: {
        dataType: 'refEnum',
        enums: ['bin', 'sql'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomBinDimension: {
        dataType: 'refObject',
        properties: {
            id: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            type: { ref: 'CustomDimensionType.BIN', required: true },
            dimensionId: { ref: 'FieldId', required: true },
            binType: { ref: 'BinType', required: true },
            binNumber: { dataType: 'double' },
            binWidth: { dataType: 'double' },
            customRange: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'BinRange' },
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CustomDimensionType.SQL': {
        dataType: 'refEnum',
        enums: ['sql'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomSqlDimension: {
        dataType: 'refObject',
        properties: {
            id: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            type: { ref: 'CustomDimensionType.SQL', required: true },
            sql: { dataType: 'string', required: true },
            dimensionType: { ref: 'DimensionType', required: true },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomDimension: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'CustomBinDimension' },
                { ref: 'CustomSqlDimension' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CompiledDimension.label-or-name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                label: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricQueryResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metadata: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        hasADateDimension: {
                            ref: 'Pick_CompiledDimension.label-or-name_',
                            required: true,
                        },
                    },
                },
                customDimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'CustomDimension' },
                },
                additionalMetrics: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'AdditionalMetric' },
                },
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'TableCalculation' },
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                filters: { ref: 'FiltersResponse', required: true },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                exploreName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CacheMetadata: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                cacheHit: { dataType: 'boolean', required: true },
                cacheUpdatedTime: { dataType: 'datetime' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FieldType: {
        dataType: 'refEnum',
        enums: ['metric', 'dimension'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SourcePosition: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                character: { dataType: 'double', required: true },
                line: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Source: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                content: { dataType: 'string', required: true },
                highlight: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        end: { ref: 'SourcePosition', required: true },
                        start: { ref: 'SourcePosition', required: true },
                    },
                },
                range: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        end: { ref: 'SourcePosition', required: true },
                        start: { ref: 'SourcePosition', required: true },
                    },
                    required: true,
                },
                path: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FieldUrl: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                label: { dataType: 'string', required: true },
                url: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Field: {
        dataType: 'refObject',
        properties: {
            fieldType: { ref: 'FieldType', required: true },
            type: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            label: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            tableLabel: { dataType: 'string', required: true },
            sql: { dataType: 'string', required: true },
            description: { dataType: 'string' },
            source: {
                dataType: 'union',
                subSchemas: [{ ref: 'Source' }, { dataType: 'undefined' }],
            },
            hidden: { dataType: 'boolean', required: true },
            compact: { ref: 'CompactOrAlias' },
            round: { dataType: 'double' },
            format: { ref: 'Format' },
            groupLabel: { dataType: 'string' },
            groups: { dataType: 'array', array: { dataType: 'string' } },
            urls: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'FieldUrl' },
            },
            index: { dataType: 'double' },
            tags: { dataType: 'array', array: { dataType: 'string' } },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'FieldType.METRIC': {
        dataType: 'refEnum',
        enums: ['metric'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.string-or-string-Array_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'string' },
                    { dataType: 'array', array: { dataType: 'string' } },
                ],
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DefaultTimeDimension: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                interval: { ref: 'TimeFrames', required: true },
                field: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Metric: {
        dataType: 'refObject',
        properties: {
            fieldType: { ref: 'FieldType.METRIC', required: true },
            type: { ref: 'MetricType', required: true },
            name: { dataType: 'string', required: true },
            label: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            tableLabel: { dataType: 'string', required: true },
            sql: { dataType: 'string', required: true },
            description: { dataType: 'string' },
            source: {
                dataType: 'union',
                subSchemas: [{ ref: 'Source' }, { dataType: 'undefined' }],
            },
            hidden: { dataType: 'boolean', required: true },
            compact: { ref: 'CompactOrAlias' },
            round: { dataType: 'double' },
            format: { ref: 'Format' },
            groupLabel: { dataType: 'string' },
            groups: { dataType: 'array', array: { dataType: 'string' } },
            urls: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'FieldUrl' },
            },
            index: { dataType: 'double' },
            tags: { dataType: 'array', array: { dataType: 'string' } },
            isAutoGenerated: { dataType: 'boolean', required: true },
            showUnderlyingValues: {
                dataType: 'array',
                array: { dataType: 'string' },
            },
            filters: {
                dataType: 'array',
                array: { dataType: 'refObject', ref: 'MetricFilterRule' },
            },
            percentile: { dataType: 'double' },
            formatOptions: { ref: 'CustomFormat' },
            dimensionReference: { dataType: 'string' },
            requiredAttributes: {
                ref: 'Record_string.string-or-string-Array_',
            },
            defaultTimeDimension: { ref: 'DefaultTimeDimension' },
            spotlight: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    visibility: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'enum', enums: ['show'] },
                            { dataType: 'enum', enums: ['hide'] },
                        ],
                        required: true,
                    },
                },
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.Item-or-AdditionalMetric_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'TableCalculation' },
                    { ref: 'AdditionalMetric' },
                    { ref: 'CustomDimension' },
                    { ref: 'Field' },
                    { ref: 'Metric' },
                ],
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiRunQueryResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        fields: {
                            ref: 'Record_string.Item-or-AdditionalMetric_',
                        },
                        rows: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        cacheMetadata: { ref: 'CacheMetadata', required: true },
                        metricQuery: {
                            ref: 'MetricQueryResponse',
                            required: true,
                        },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DateGranularity: {
        dataType: 'refEnum',
        enums: ['Day', 'Week', 'Month', 'Quarter', 'Year'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Metric.formatOptions_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                formatOptions: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'CustomFormat' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricOverrides: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'Pick_Metric.formatOptions_' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricQueryRequest: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metricOverrides: { ref: 'MetricOverrides' },
                timezone: { dataType: 'string' },
                metadata: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        hasADateDimension: {
                            ref: 'Pick_CompiledDimension.label-or-name_',
                            required: true,
                        },
                    },
                },
                granularity: { ref: 'DateGranularity' },
                customDimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'CustomDimension' },
                },
                csvLimit: { dataType: 'double' },
                additionalMetrics: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'AdditionalMetric' },
                },
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'TableCalculation' },
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                filters: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        tableCalculations: { dataType: 'any' },
                        metrics: { dataType: 'any' },
                        dimensions: { dataType: 'any' },
                    },
                    required: true,
                },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                exploreName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ChartVersion.chartUuid-or-versionUuid-or-createdAt-or-createdBy_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                createdAt: { dataType: 'datetime', required: true },
                chartUuid: { dataType: 'string', required: true },
                versionUuid: { dataType: 'string', required: true },
                createdBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartVersionSummary: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ChartVersion.chartUuid-or-versionUuid-or-createdAt-or-createdBy_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartHistory: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                history: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ChartVersionSummary' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetChartHistoryResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ChartHistory', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FilterGroup: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [{ ref: 'OrFilterGroup' }, { ref: 'AndFilterGroup' }],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FieldTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                fieldId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FilterRule: {
        dataType: 'refObject',
        properties: {
            values: { dataType: 'array', array: { dataType: 'any' } },
            operator: { ref: 'ConditionalOperator', required: true },
            id: { dataType: 'string', required: true },
            target: { ref: 'FieldTarget', required: true },
            settings: { dataType: 'any' },
            disabled: { dataType: 'boolean' },
            required: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FilterGroupItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [{ ref: 'FilterGroup' }, { ref: 'FilterRule' }],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrFilterGroup: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                or: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FilterGroupItem' },
                    required: true,
                },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AndFilterGroup: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                and: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FilterGroupItem' },
                    required: true,
                },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Filters: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tableCalculations: { ref: 'FilterGroup' },
                metrics: { ref: 'FilterGroup' },
                dimensions: { ref: 'FilterGroup' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metadata: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        hasADateDimension: {
                            ref: 'Pick_CompiledDimension.label-or-name_',
                            required: true,
                        },
                    },
                },
                timezone: { dataType: 'string' },
                metricOverrides: { ref: 'MetricOverrides' },
                customDimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'CustomDimension' },
                },
                additionalMetrics: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'AdditionalMetric' },
                },
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'TableCalculation' },
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                filters: { ref: 'Filters', required: true },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                exploreName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.BIG_NUMBER': {
        dataType: 'refEnum',
        enums: ['big_number'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ComparisonFormatTypes: {
        dataType: 'refEnum',
        enums: ['raw', 'percentage'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BigNumber: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                comparisonLabel: { dataType: 'string' },
                flipColors: { dataType: 'boolean' },
                comparisonFormat: { ref: 'ComparisonFormatTypes' },
                showComparison: { dataType: 'boolean' },
                showBigNumberLabel: { dataType: 'boolean' },
                selectedField: { dataType: 'string' },
                style: { ref: 'CompactOrAlias' },
                label: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BigNumberConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'BigNumber' },
                type: { ref: 'ChartType.BIG_NUMBER', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.CARTESIAN': {
        dataType: 'refEnum',
        enums: ['cartesian'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_CompleteCartesianChartLayout_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                xField: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                yField: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'array', array: { dataType: 'string' } },
                        { dataType: 'undefined' },
                    ],
                },
                flipAxes: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
                showGridX: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
                showGridY: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CartesianChartLayout: {
        dataType: 'refAlias',
        type: { ref: 'Partial_CompleteCartesianChartLayout_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EchartsLegend: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                icon: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['circle'] },
                        { dataType: 'enum', enums: ['rect'] },
                        { dataType: 'enum', enums: ['roundRect'] },
                        { dataType: 'enum', enums: ['triangle'] },
                        { dataType: 'enum', enums: ['diamond'] },
                        { dataType: 'enum', enums: ['pin'] },
                        { dataType: 'enum', enums: ['arrow'] },
                        { dataType: 'enum', enums: ['none'] },
                    ],
                },
                align: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['auto'] },
                        { dataType: 'enum', enums: ['left'] },
                        { dataType: 'enum', enums: ['right'] },
                    ],
                },
                height: { dataType: 'string' },
                width: { dataType: 'string' },
                left: { dataType: 'string' },
                bottom: { dataType: 'string' },
                right: { dataType: 'string' },
                top: { dataType: 'string' },
                orient: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['horizontal'] },
                        { dataType: 'enum', enums: ['vertical'] },
                    ],
                },
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['plain'] },
                        { dataType: 'enum', enums: ['scroll'] },
                    ],
                },
                show: { dataType: 'boolean' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EchartsGrid: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                height: { dataType: 'string' },
                width: { dataType: 'string' },
                left: { dataType: 'string' },
                bottom: { dataType: 'string' },
                right: { dataType: 'string' },
                top: { dataType: 'string' },
                containLabel: { dataType: 'boolean' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PivotValue: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'any', required: true },
                field: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PivotReference: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pivotValues: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'PivotValue' },
                },
                field: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CartesianSeriesType: {
        dataType: 'refEnum',
        enums: ['line', 'bar', 'scatter', 'area'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.unknown_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { dataType: 'any' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MarkLineData: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                dynamicValue: { dataType: 'enum', enums: ['average'] },
                label: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        position: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'enum', enums: ['start'] },
                                { dataType: 'enum', enums: ['middle'] },
                                { dataType: 'enum', enums: ['end'] },
                            ],
                        },
                        formatter: { dataType: 'string' },
                    },
                },
                lineStyle: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        color: { dataType: 'string', required: true },
                    },
                },
                uuid: { dataType: 'string', required: true },
                type: { dataType: 'string' },
                value: { dataType: 'string' },
                name: { dataType: 'string' },
                xAxis: { dataType: 'string' },
                yAxis: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MarkLine: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                label: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: { formatter: { dataType: 'string' } },
                },
                lineStyle: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        type: { dataType: 'string', required: true },
                        width: { dataType: 'double', required: true },
                        color: { dataType: 'string', required: true },
                    },
                },
                symbol: { dataType: 'string' },
                data: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'MarkLineData' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Series: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                markLine: { ref: 'MarkLine' },
                smooth: { dataType: 'boolean' },
                showSymbol: { dataType: 'boolean' },
                areaStyle: { ref: 'Record_string.unknown_' },
                hidden: { dataType: 'boolean' },
                label: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        position: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'enum', enums: ['left'] },
                                { dataType: 'enum', enums: ['top'] },
                                { dataType: 'enum', enums: ['right'] },
                                { dataType: 'enum', enums: ['bottom'] },
                                { dataType: 'enum', enums: ['inside'] },
                            ],
                        },
                        show: { dataType: 'boolean' },
                    },
                },
                yAxisIndex: { dataType: 'double' },
                color: { dataType: 'string' },
                name: { dataType: 'string' },
                stackLabel: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: { show: { dataType: 'boolean' } },
                },
                stack: { dataType: 'string' },
                type: { ref: 'CartesianSeriesType', required: true },
                encode: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        y: { dataType: 'string' },
                        x: { dataType: 'string' },
                        yRef: { ref: 'PivotReference', required: true },
                        xRef: { ref: 'PivotReference', required: true },
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Axis: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rotate: { dataType: 'double' },
                inverse: { dataType: 'boolean' },
                maxOffset: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                minOffset: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                max: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                min: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                name: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_CompleteEChartsConfig_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                legend: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'EchartsLegend' },
                        { dataType: 'undefined' },
                    ],
                },
                grid: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'EchartsGrid' },
                        { dataType: 'undefined' },
                    ],
                },
                series: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'Series' },
                        },
                        { dataType: 'undefined' },
                    ],
                },
                xAxis: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'Axis' },
                        },
                        { dataType: 'undefined' },
                    ],
                },
                yAxis: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'Axis' },
                        },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EChartsConfig: {
        dataType: 'refAlias',
        type: { ref: 'Partial_CompleteEChartsConfig_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SeriesMetadata: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { color: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.SeriesMetadata_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'SeriesMetadata' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CartesianChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metadata: { ref: 'Record_string.SeriesMetadata_' },
                eChartsConfig: { ref: 'EChartsConfig', required: true },
                layout: { ref: 'CartesianChartLayout', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CartesianChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'CartesianChart' },
                type: { ref: 'ChartType.CARTESIAN', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.CUSTOM': {
        dataType: 'refEnum',
        enums: ['custom'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomVis: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { spec: { ref: 'Record_string.unknown_' } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomVisConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'CustomVis' },
                type: { ref: 'ChartType.CUSTOM', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.PIE': {
        dataType: 'refEnum',
        enums: ['pie'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PieChartValueLabel: {
        dataType: 'refAlias',
        type: {
            dataType: 'enum',
            enums: ['hidden', 'inside', 'outside'],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_PieChartValueOptions_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                valueLabel: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['hidden'] },
                        { dataType: 'enum', enums: ['inside'] },
                        { dataType: 'enum', enums: ['outside'] },
                        { dataType: 'undefined' },
                    ],
                },
                showValue: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
                showPercentage: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.Partial_PieChartValueOptions__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'Partial_PieChartValueOptions_' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PieChartLegendPosition: {
        dataType: 'refAlias',
        type: {
            dataType: 'enum',
            enums: ['horizontal', 'vertical'],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PieChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metadata: { ref: 'Record_string.SeriesMetadata_' },
                legendMaxItemLength: { dataType: 'double' },
                legendPosition: { ref: 'PieChartLegendPosition' },
                showLegend: { dataType: 'boolean' },
                groupSortOverrides: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                groupValueOptionOverrides: {
                    ref: 'Record_string.Partial_PieChartValueOptions__',
                },
                groupColorOverrides: { ref: 'Record_string.string_' },
                groupLabelOverrides: { ref: 'Record_string.string_' },
                showPercentage: { dataType: 'boolean' },
                showValue: { dataType: 'boolean' },
                valueLabel: { ref: 'PieChartValueLabel' },
                isDonut: { dataType: 'boolean' },
                metricId: { dataType: 'string' },
                groupFieldIds: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PieChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'PieChart' },
                type: { ref: 'ChartType.PIE', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.FUNNEL': {
        dataType: 'refEnum',
        enums: ['funnel'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FunnelChartDataInput: {
        dataType: 'refEnum',
        enums: ['row', 'column'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FunnelChartLabelPosition: {
        dataType: 'refEnum',
        enums: ['inside', 'left', 'right', 'hidden'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FunnelChartLegendPosition: {
        dataType: 'refEnum',
        enums: ['horizontal', 'vertical'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FunnelChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                legendPosition: { ref: 'FunnelChartLegendPosition' },
                showLegend: { dataType: 'boolean' },
                labels: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        showPercentage: { dataType: 'boolean' },
                        showValue: { dataType: 'boolean' },
                        position: { ref: 'FunnelChartLabelPosition' },
                    },
                },
                colorOverrides: { ref: 'Record_string.string_' },
                labelOverrides: { ref: 'Record_string.string_' },
                metadata: { ref: 'Record_string.SeriesMetadata_' },
                fieldId: { dataType: 'string' },
                dataInput: { ref: 'FunnelChartDataInput' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FunnelChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'FunnelChart' },
                type: { ref: 'ChartType.FUNNEL', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ChartType.TABLE': {
        dataType: 'refEnum',
        enums: ['table'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ColumnProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                frozen: { dataType: 'boolean' },
                name: { dataType: 'string' },
                visible: { dataType: 'boolean' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.ColumnProperties_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'ColumnProperties' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ConditionalRule_ConditionalOperator.number_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                values: { dataType: 'array', array: { dataType: 'double' } },
                operator: { ref: 'ConditionalOperator', required: true },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalFormattingWithConditionalOperator: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ConditionalRule_ConditionalOperator.number_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        values: {
                            dataType: 'array',
                            array: { dataType: 'double' },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalFormattingConfigWithSingleColor: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rules: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'ConditionalFormattingWithConditionalOperator',
                    },
                    required: true,
                },
                color: { dataType: 'string', required: true },
                target: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'FieldTarget' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalFormattingWithRange: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                max: { dataType: 'double', required: true },
                min: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalFormattingConfigWithColorRange: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rule: { ref: 'ConditionalFormattingWithRange', required: true },
                color: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        steps: { dataType: 'enum', enums: [5], required: true },
                        end: { dataType: 'string', required: true },
                        start: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                target: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'FieldTarget' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalFormattingConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ConditionalFormattingConfigWithSingleColor' },
                { ref: 'ConditionalFormattingConfigWithColorRange' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metricsAsRows: { dataType: 'boolean' },
                conditionalFormattings: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'ConditionalFormattingConfig',
                    },
                },
                columns: { ref: 'Record_string.ColumnProperties_' },
                showSubtotals: { dataType: 'boolean' },
                showResultsTotal: { dataType: 'boolean' },
                hideRowNumbers: { dataType: 'boolean' },
                showTableNames: { dataType: 'boolean' },
                showRowCalculation: { dataType: 'boolean' },
                showColumnCalculation: { dataType: 'boolean' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'TableChart' },
                type: { ref: 'ChartType.TABLE', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'BigNumberConfig' },
                { ref: 'CartesianChartConfig' },
                { ref: 'CustomVisConfig' },
                { ref: 'PieChartConfig' },
                { ref: 'FunnelChartConfig' },
                { ref: 'TableChartConfig' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SavedChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                slug: { dataType: 'string', required: true },
                access: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceShare' },
                    required: true,
                },
                isPrivate: { dataType: 'boolean', required: true },
                colorPalette: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                dashboardName: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                dashboardUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                spaceName: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
                updatedByUser: { ref: 'UpdatedByUser' },
                updatedAt: { dataType: 'datetime', required: true },
                tableConfig: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        columnOrder: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                    },
                    required: true,
                },
                chartConfig: { ref: 'ChartConfig', required: true },
                pivotConfig: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        columns: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                    },
                },
                metricQuery: { ref: 'MetricQuery', required: true },
                tableName: { dataType: 'string', required: true },
                description: { dataType: 'string' },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartVersion: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                chart: { ref: 'SavedChart', required: true },
                createdBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                versionUuid: { dataType: 'string', required: true },
                chartUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetChartVersionResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ChartVersion', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.number_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { dataType: 'double' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCalculateTotalResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Record_string.number_', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.Exclude_keyofSavedChart.isPrivate-or-access__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                organizationUuid: { dataType: 'string', required: true },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                slug: { dataType: 'string', required: true },
                spaceName: { dataType: 'string', required: true },
                dashboardUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                dashboardName: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                updatedAt: { dataType: 'datetime', required: true },
                updatedByUser: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'UpdatedByUser' },
                        { dataType: 'undefined' },
                    ],
                },
                tableName: { dataType: 'string', required: true },
                metricQuery: { ref: 'MetricQuery', required: true },
                pivotConfig: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                columns: {
                                    dataType: 'array',
                                    array: { dataType: 'string' },
                                    required: true,
                                },
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                },
                chartConfig: { ref: 'ChartConfig', required: true },
                tableConfig: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        columnOrder: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                    },
                    required: true,
                },
                colorPalette: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_SavedChart.isPrivate-or-access_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_SavedChart.Exclude_keyofSavedChart.isPrivate-or-access__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SavedChartDAO: {
        dataType: 'refAlias',
        type: { ref: 'Omit_SavedChart.isPrivate-or-access_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiPromoteChartResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SavedChartDAO', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PromotionAction: {
        dataType: 'refEnum',
        enums: ['no changes', 'create', 'update', 'delete'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpaceSummary.Exclude_keyofSpaceSummary.userAccess__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
                isPrivate: { dataType: 'boolean', required: true },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                slug: { dataType: 'string', required: true },
                access: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                chartCount: { dataType: 'double', required: true },
                dashboardCount: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_SpaceSummary.userAccess_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_SpaceSummary.Exclude_keyofSpaceSummary.userAccess__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PromotedSpace: {
        dataType: 'refAlias',
        type: { ref: 'Omit_SpaceSummary.userAccess_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTileTypes: {
        dataType: 'refEnum',
        enums: [
            'saved_chart',
            'sql_chart',
            'semantic_viewer_chart',
            'markdown',
            'loom',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Required_CreateDashboardTileBase_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                uuid: { dataType: 'string', required: true },
                type: { ref: 'DashboardTileTypes', required: true },
                x: { dataType: 'double', required: true },
                y: { dataType: 'double', required: true },
                h: { dataType: 'double', required: true },
                w: { dataType: 'double', required: true },
                tabUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTileBase: {
        dataType: 'refAlias',
        type: { ref: 'Required_CreateDashboardTileBase_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DashboardTileTypes.SAVED_CHART': {
        dataType: 'refEnum',
        enums: ['saved_chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardChartTileProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                properties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartSlug: { dataType: 'string' },
                        lastVersionChartKind: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartKind' },
                                { dataType: 'enum', enums: [null] },
                            ],
                        },
                        chartName: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                        },
                        belongsToDashboard: { dataType: 'boolean' },
                        savedChartUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        hideTitle: { dataType: 'boolean' },
                        title: { dataType: 'string' },
                    },
                    required: true,
                },
                type: { ref: 'DashboardTileTypes.SAVED_CHART', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardTileBase' },
                { ref: 'DashboardChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DashboardTileTypes.MARKDOWN': {
        dataType: 'refEnum',
        enums: ['markdown'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardMarkdownTileProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                properties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        content: { dataType: 'string', required: true },
                        title: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                type: { ref: 'DashboardTileTypes.MARKDOWN', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardMarkdownTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardTileBase' },
                { ref: 'DashboardMarkdownTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DashboardTileTypes.LOOM': {
        dataType: 'refEnum',
        enums: ['loom'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardLoomTileProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                properties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        url: { dataType: 'string', required: true },
                        hideTitle: { dataType: 'boolean' },
                        title: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                type: { ref: 'DashboardTileTypes.LOOM', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardLoomTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardTileBase' },
                { ref: 'DashboardLoomTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DashboardTileTypes.SQL_CHART': {
        dataType: 'refEnum',
        enums: ['sql_chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardSqlChartTileProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                properties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartSlug: { dataType: 'string' },
                        hideTitle: { dataType: 'boolean' },
                        chartName: { dataType: 'string', required: true },
                        savedSqlUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        title: { dataType: 'string' },
                    },
                    required: true,
                },
                type: { ref: 'DashboardTileTypes.SQL_CHART', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardSqlChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardTileBase' },
                { ref: 'DashboardSqlChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DashboardTileTypes.SEMANTIC_VIEWER_CHART': {
        dataType: 'refEnum',
        enums: ['semantic_viewer_chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardSemanticViewerChartTileProperties: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                properties: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartSlug: { dataType: 'string' },
                        hideTitle: { dataType: 'boolean' },
                        chartName: { dataType: 'string', required: true },
                        savedSemanticViewerChartUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        title: { dataType: 'string' },
                    },
                    required: true,
                },
                type: {
                    ref: 'DashboardTileTypes.SEMANTIC_VIEWER_CHART',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardSemanticViewerChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardTileBase' },
                { ref: 'DashboardSemanticViewerChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'DashboardChartTile' },
                { ref: 'DashboardMarkdownTile' },
                { ref: 'DashboardLoomTile' },
                { ref: 'DashboardSqlChartTile' },
                { ref: 'DashboardSemanticViewerChartTile' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardFilters: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardFilterRule' },
                    required: true,
                },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardFilterRule' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardFilterRule' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTab: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                order: { dataType: 'double', required: true },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                isDateZoomDisabled: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.Exclude_keyofDashboard.isPrivate-or-access__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                organizationUuid: { dataType: 'string', required: true },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                slug: { dataType: 'string', required: true },
                spaceName: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                updatedByUser: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'UpdatedByUser' },
                        { dataType: 'undefined' },
                    ],
                },
                views: { dataType: 'double', required: true },
                firstViewedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'datetime' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                dashboardVersionId: { dataType: 'double', required: true },
                tiles: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardTile' },
                    required: true,
                },
                filters: { ref: 'DashboardFilters', required: true },
                tabs: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardTab' },
                    required: true,
                },
                config: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'DashboardConfig' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_Dashboard.isPrivate-or-access_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_Dashboard.Exclude_keyofDashboard.isPrivate-or-access__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardDAO: {
        dataType: 'refAlias',
        type: { ref: 'Omit_Dashboard.isPrivate-or-access_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PromotedDashboard: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardDAO' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        spaceSlug: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PromotedChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SavedChartDAO' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        oldUuid: { dataType: 'string', required: true },
                        spaceSlug: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PromotionChanges: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                charts: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            data: { ref: 'PromotedChart', required: true },
                            action: { ref: 'PromotionAction', required: true },
                        },
                    },
                    required: true,
                },
                dashboards: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            data: { ref: 'PromotedDashboard', required: true },
                            action: { ref: 'PromotionAction', required: true },
                        },
                    },
                    required: true,
                },
                spaces: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            data: { ref: 'PromotedSpace', required: true },
                            action: { ref: 'PromotionAction', required: true },
                        },
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiPromotionChangesResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PromotionChanges', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectType: {
        dataType: 'refEnum',
        enums: ['DEFAULT', 'PREVIEW'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.DBT': {
        dataType: 'refEnum',
        enums: ['dbt'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectEnvironmentVariable: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'string', required: true },
                key: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectType: {
        dataType: 'refEnum',
        enums: [
            'dbt',
            'dbt_cloud_ide',
            'github',
            'gitlab',
            'bitbucket',
            'azure_devops',
            'none',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtLocalProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.DBT', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            profiles_dir: { dataType: 'string' },
            project_dir: { dataType: 'string' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.DBT_CLOUD_IDE': {
        dataType: 'refEnum',
        enums: ['dbt_cloud_ide'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtCloudIDEProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.DBT_CLOUD_IDE', required: true },
            api_key: { dataType: 'string', required: true },
            environment_id: { dataType: 'string', required: true },
            discovery_api_endpoint: { dataType: 'string' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.GITHUB': {
        dataType: 'refEnum',
        enums: ['github'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtGithubProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.GITHUB', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.BITBUCKET': {
        dataType: 'refEnum',
        enums: ['bitbucket'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtBitBucketProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.BITBUCKET', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            username: { dataType: 'string', required: true },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.GITLAB': {
        dataType: 'refEnum',
        enums: ['gitlab'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtGitlabProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.GITLAB', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.AZURE_DEVOPS': {
        dataType: 'refEnum',
        enums: ['azure_devops'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtAzureDevOpsProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.AZURE_DEVOPS', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            personal_access_token: { dataType: 'string', required: true },
            organization: { dataType: 'string', required: true },
            project: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.NONE': {
        dataType: 'refEnum',
        enums: ['none'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtNoneProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.NONE', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            selector: { dataType: 'string' },
            hideRefreshButton: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'DbtLocalProjectConfig' },
                { ref: 'DbtCloudIDEProjectConfig' },
                { ref: 'DbtGithubProjectConfig' },
                { ref: 'DbtBitBucketProjectConfig' },
                { ref: 'DbtGitlabProjectConfig' },
                { ref: 'DbtAzureDevOpsProjectConfig' },
                { ref: 'DbtNoneProjectConfig' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WeekDay: {
        dataType: 'refEnum',
        enums: [0, 1, 2, 3, 4, 5, 6],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateSnowflakeCredentials.Exclude_keyofCreateSnowflakeCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.SNOWFLAKE', required: true },
                    role: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    account: { dataType: 'string', required: true },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    database: { dataType: 'string', required: true },
                    warehouse: { dataType: 'string', required: true },
                    schema: { dataType: 'string', required: true },
                    threads: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    clientSessionKeepAlive: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    queryTag: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    accessUrl: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    quotedIdentifiersIgnoreCase: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    override: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateSnowflakeCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateSnowflakeCredentials.Exclude_keyofCreateSnowflakeCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SnowflakeCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateSnowflakeCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateRedshiftCredentials.Exclude_keyofCreateRedshiftCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.REDSHIFT', required: true },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    schema: { dataType: 'string', required: true },
                    threads: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    useSshTunnel: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelHost: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelPort: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelUser: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelPublicKey: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    keepalivesIdle: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sslmode: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    ra3Node: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    timeoutSeconds: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateRedshiftCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateRedshiftCredentials.Exclude_keyofCreateRedshiftCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    RedshiftCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateRedshiftCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreatePostgresCredentials.Exclude_keyofCreatePostgresCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.POSTGRES', required: true },
                    role: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    schema: { dataType: 'string', required: true },
                    threads: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    useSshTunnel: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelHost: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelPort: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelUser: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sshTunnelPublicKey: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    keepalivesIdle: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    sslmode: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    timeoutSeconds: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    searchPath: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreatePostgresCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreatePostgresCredentials.Exclude_keyofCreatePostgresCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PostgresCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreatePostgresCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateBigqueryCredentials.Exclude_keyofCreateBigqueryCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.BIGQUERY', required: true },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    threads: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                    },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    timeoutSeconds: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    project: { dataType: 'string', required: true },
                    dataset: { dataType: 'string', required: true },
                    priority: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'enum', enums: ['interactive'] },
                            { dataType: 'enum', enums: ['batch'] },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    retries: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    location: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    maximumBytesBilled: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    executionProject: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateBigqueryCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateBigqueryCredentials.Exclude_keyofCreateBigqueryCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BigqueryCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateBigqueryCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDatabricksCredentials.Exclude_keyofCreateDatabricksCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.DATABRICKS', required: true },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    database: { dataType: 'string', required: true },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    catalog: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    serverHostName: { dataType: 'string', required: true },
                    httpPath: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateDatabricksCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateDatabricksCredentials.Exclude_keyofCreateDatabricksCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DatabricksCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateDatabricksCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateTrinoCredentials.Exclude_keyofCreateTrinoCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.TRINO', required: true },
                    requireUserCredentials: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    schema: { dataType: 'string', required: true },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                            { dataType: 'undefined' },
                        ],
                    },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    http_scheme: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateTrinoCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateTrinoCredentials.Exclude_keyofCreateTrinoCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TrinoCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateTrinoCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WarehouseCredentials: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SnowflakeCredentials' },
                { ref: 'RedshiftCredentials' },
                { ref: 'PostgresCredentials' },
                { ref: 'BigqueryCredentials' },
                { ref: 'DatabricksCredentials' },
                { ref: 'TrinoCredentials' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SupportedDbtVersions: {
        dataType: 'refEnum',
        enums: ['v1.4', 'v1.5', 'v1.6', 'v1.7', 'v1.8', 'v1.9'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtVersionOptionLatest: {
        dataType: 'refEnum',
        enums: ['latest'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtVersionOption: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SupportedDbtVersions' },
                { ref: 'DbtVersionOptionLatest' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'SemanticLayerType.DBT': {
        dataType: 'refEnum',
        enums: ['DBT'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtSemanticLayerConnection: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                token: { dataType: 'string', required: true },
                domain: { dataType: 'string', required: true },
                environmentId: { dataType: 'string', required: true },
                type: { ref: 'SemanticLayerType.DBT', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'SemanticLayerType.CUBE': {
        dataType: 'refEnum',
        enums: ['CUBE'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CubeSemanticLayerConnection: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                token: { dataType: 'string', required: true },
                domain: { dataType: 'string', required: true },
                type: { ref: 'SemanticLayerType.CUBE', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerConnection: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'DbtSemanticLayerConnection' },
                { ref: 'CubeSemanticLayerConnection' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Project: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                createdByUserUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                schedulerTimezone: { dataType: 'string', required: true },
                semanticLayerConnection: { ref: 'SemanticLayerConnection' },
                dbtVersion: { ref: 'DbtVersionOption', required: true },
                upstreamProjectUuid: { dataType: 'string' },
                pinnedListUuid: { dataType: 'string' },
                warehouseConnection: { ref: 'WarehouseCredentials' },
                dbtConnection: { ref: 'DbtProjectConfig', required: true },
                type: { ref: 'ProjectType', required: true },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiProjectResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Project', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiChartListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceQuery' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiChartSummaryListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ChartSummary' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Space.organizationUuid-or-projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-slug_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    isPrivate: { dataType: 'boolean', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    slug: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceSummary: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Space.organizationUuid-or-projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-slug_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardCount: { dataType: 'double', required: true },
                        chartCount: { dataType: 'double', required: true },
                        access: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        userAccess: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'SpaceShare' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSpaceSummaryListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceSummary' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                role: { ref: 'ProjectMemberRole', required: true },
                projectUuid: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiProjectAccessListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'ProjectMemberProfile',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetProjectMemberResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ProjectMemberProfile', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateProjectMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                sendEmail: { dataType: 'boolean', required: true },
                role: { ref: 'ProjectMemberRole', required: true },
                email: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateProjectMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectGroupAccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
                groupUuid: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetProjectGroupAccesses: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ProjectGroupAccess' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string._type-DimensionType__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'DimensionType', required: true },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSqlQueryResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rows: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Record_string.unknown_',
                    },
                    required: true,
                },
                fields: {
                    ref: 'Record_string._type-DimensionType__',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CalculateTotalFromQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                explore: { dataType: 'string', required: true },
                metricQuery: { ref: 'MetricQueryRequest', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtExposureType: {
        dataType: 'refEnum',
        enums: ['dashboard', 'notebook', 'analysis', 'ml', 'application'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtExposure: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tags: { dataType: 'array', array: { dataType: 'string' } },
                url: { dataType: 'string' },
                description: { dataType: 'string' },
                label: { dataType: 'string' },
                dependsOn: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                type: { ref: 'DbtExposureType', required: true },
                owner: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        email: { dataType: 'string', required: true },
                        name: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.DbtExposure_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'DbtExposure' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateMetadata: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                upstreamProjectUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_DbtSemanticLayerConnection_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'SemanticLayerType.DBT' },
                        { dataType: 'undefined' },
                    ],
                },
                environmentId: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                domain: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                token: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_CubeSemanticLayerConnection_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'SemanticLayerType.CUBE' },
                        { dataType: 'undefined' },
                    ],
                },
                domain: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                token: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerConnectionUpdate: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'Partial_DbtSemanticLayerConnection_' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                type: {
                                    ref: 'SemanticLayerType.DBT',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
                {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'Partial_CubeSemanticLayerConnection_' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                type: {
                                    ref: 'SemanticLayerType.CUBE',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardBasicDetailsWithTileTypes: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DashboardBasicDetails' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        tileTypes: {
                            dataType: 'array',
                            array: {
                                dataType: 'refEnum',
                                ref: 'DashboardTileTypes',
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetDashboardsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'DashboardBasicDetailsWithTileTypes',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Dashboard: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'DashboardConfig' },
                slug: { dataType: 'string', required: true },
                access: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'SpaceShare' },
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                isPrivate: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                tabs: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardTab' },
                    required: true,
                },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                firstViewedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                views: { dataType: 'double', required: true },
                spaceName: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string', required: true },
                updatedByUser: { ref: 'UpdatedByUser' },
                filters: { ref: 'DashboardFilters', required: true },
                tiles: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardTile' },
                    required: true,
                },
                updatedAt: { dataType: 'datetime', required: true },
                description: { dataType: 'string' },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                dashboardVersionId: { dataType: 'double', required: true },
                projectUuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateDashboardResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Dashboard', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DuplicateDashboardParams: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                dashboardDesc: { dataType: 'string', required: true },
                dashboardName: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardTileBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tabUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                w: { dataType: 'double', required: true },
                h: { dataType: 'double', required: true },
                y: { dataType: 'double', required: true },
                x: { dataType: 'double', required: true },
                type: { ref: 'DashboardTileTypes', required: true },
                uuid: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CreateDashboardTileBase' },
                { ref: 'DashboardChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardMarkdownTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CreateDashboardTileBase' },
                { ref: 'DashboardMarkdownTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardLoomTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CreateDashboardTileBase' },
                { ref: 'DashboardLoomTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardSqlChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CreateDashboardTileBase' },
                { ref: 'DashboardSqlChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboardSemanticViewerChartTile: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CreateDashboardTileBase' },
                { ref: 'DashboardSemanticViewerChartTileProperties' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_UpdatedByUser.userUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateDashboard: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                config: { ref: 'DashboardConfig' },
                tabs: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DashboardTab' },
                    required: true,
                },
                spaceUuid: { dataType: 'string' },
                updatedByUser: { ref: 'Pick_UpdatedByUser.userUuid_' },
                filters: { ref: 'DashboardFilters' },
                tiles: {
                    dataType: 'array',
                    array: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'CreateDashboardChartTile' },
                            { ref: 'CreateDashboardMarkdownTile' },
                            { ref: 'CreateDashboardLoomTile' },
                            { ref: 'CreateDashboardSqlChartTile' },
                            { ref: 'CreateDashboardSemanticViewerChartTile' },
                        ],
                    },
                    required: true,
                },
                description: { dataType: 'string' },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUpdateDashboardsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'Dashboard' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.uuid-or-name-or-description-or-spaceUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateMultipleDashboards: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_Dashboard.uuid-or-name-or-description-or-spaceUuid_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateSchedulerSettings: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                schedulerTimezone: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateTagResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        tagUuid: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Tag.name-or-color_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                color: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Partial_Pick_DbTag.name-or-color__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                color: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbTagUpdate: {
        dataType: 'refAlias',
        type: { ref: 'Partial_Pick_DbTag.name-or-color__', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Tag: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                createdBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                color: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                tagUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetTagsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'Tag' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.name-or-description-or-tableName-or-metricQuery-or-chartConfig-or-tableConfig-or-slug-or-updatedAt_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    slug: { dataType: 'string', required: true },
                    updatedAt: { dataType: 'datetime', required: true },
                    tableName: { dataType: 'string', required: true },
                    metricQuery: { ref: 'MetricQuery', required: true },
                    chartConfig: { ref: 'ChartConfig', required: true },
                    tableConfig: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            columnOrder: {
                                dataType: 'array',
                                array: { dataType: 'string' },
                                required: true,
                            },
                        },
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartAsCode: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_SavedChart.name-or-description-or-tableName-or-metricQuery-or-chartConfig-or-tableConfig-or-slug-or-updatedAt_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        downloadedAt: { dataType: 'datetime' },
                        spaceSlug: { dataType: 'string', required: true },
                        version: { dataType: 'double', required: true },
                        dashboardSlug: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiChartAsCodeListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        offset: { dataType: 'double', required: true },
                        total: { dataType: 'double', required: true },
                        missingIds: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        charts: {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'ChartAsCode' },
                            required: true,
                        },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.name-or-description-or-updatedAt-or-filters-or-tabs-or-slug_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    slug: { dataType: 'string', required: true },
                    updatedAt: { dataType: 'datetime', required: true },
                    filters: { ref: 'DashboardFilters', required: true },
                    tabs: {
                        dataType: 'array',
                        array: { dataType: 'refAlias', ref: 'DashboardTab' },
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DashboardTile.Exclude_keyofDashboardTile.properties-or-uuid__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'DashboardTileTypes', required: true },
                x: { dataType: 'double', required: true },
                y: { dataType: 'double', required: true },
                h: { dataType: 'double', required: true },
                w: { dataType: 'double', required: true },
                tabUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_DashboardTile.properties-or-uuid_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_DashboardTile.Exclude_keyofDashboardTile.properties-or-uuid__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DashboardChartTileProperties-at-properties.title-or-hideTitle-or-chartSlug_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    title: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    hideTitle: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'boolean' },
                            { dataType: 'undefined' },
                        ],
                    },
                    chartSlug: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardTileAsCode: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Omit_DashboardTile.properties-or-uuid_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        properties: {
                            dataType: 'union',
                            subSchemas: [
                                {
                                    ref: 'Pick_DashboardChartTileProperties-at-properties.title-or-hideTitle-or-chartSlug_',
                                },
                                {
                                    dataType: 'nestedObjectLiteral',
                                    nestedProperties: {
                                        content: {
                                            dataType: 'string',
                                            required: true,
                                        },
                                        title: {
                                            dataType: 'string',
                                            required: true,
                                        },
                                    },
                                },
                                {
                                    dataType: 'nestedObjectLiteral',
                                    nestedProperties: {
                                        url: {
                                            dataType: 'string',
                                            required: true,
                                        },
                                        hideTitle: { dataType: 'boolean' },
                                        title: {
                                            dataType: 'string',
                                            required: true,
                                        },
                                    },
                                },
                            ],
                            required: true,
                        },
                        uuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardAsCode: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Dashboard.name-or-description-or-updatedAt-or-filters-or-tabs-or-slug_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        downloadedAt: { dataType: 'datetime' },
                        spaceSlug: { dataType: 'string', required: true },
                        version: { dataType: 'double', required: true },
                        tiles: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'DashboardTileAsCode',
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiDashboardAsCodeListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        offset: { dataType: 'double', required: true },
                        total: { dataType: 'double', required: true },
                        missingIds: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        dashboards: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'DashboardAsCode',
                            },
                            required: true,
                        },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiChartAsCodeUpsertResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PromotionChanges', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ChartAsCode.Exclude_keyofChartAsCode.metricQuery-or-chartConfig-or-description__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    slug: { dataType: 'string', required: true },
                    updatedAt: { dataType: 'datetime', required: true },
                    tableName: { dataType: 'string', required: true },
                    tableConfig: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            columnOrder: {
                                dataType: 'array',
                                array: { dataType: 'string' },
                                required: true,
                            },
                        },
                        required: true,
                    },
                    dashboardSlug: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    version: { dataType: 'double', required: true },
                    spaceSlug: { dataType: 'string', required: true },
                    downloadedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'datetime' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_ChartAsCode.metricQuery-or-chartConfig-or-description_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ChartAsCode.Exclude_keyofChartAsCode.metricQuery-or-chartConfig-or-description__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiDashboardAsCodeUpsertResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PromotionChanges', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DashboardAsCode.Exclude_keyofDashboardAsCode.filters-or-tiles-or-description__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    slug: { dataType: 'string', required: true },
                    updatedAt: { dataType: 'datetime', required: true },
                    tabs: {
                        dataType: 'array',
                        array: { dataType: 'refAlias', ref: 'DashboardTab' },
                        required: true,
                    },
                    version: { dataType: 'double', required: true },
                    spaceSlug: { dataType: 'string', required: true },
                    downloadedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'datetime' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_DashboardAsCode.filters-or-tiles-or-description_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_DashboardAsCode.Exclude_keyofDashboardAsCode.filters-or-tiles-or-description__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.DASHBOARD': {
        dataType: 'refEnum',
        enums: ['dashboard'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DashboardBasicDetails.uuid-or-spaceUuid-or-description-or-name-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder-or-updatedAt-or-updatedByUser-or-validationErrors_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'UpdatedByUser' },
                            { dataType: 'undefined' },
                        ],
                    },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'datetime' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    validationErrors: {
                        dataType: 'union',
                        subSchemas: [
                            {
                                dataType: 'array',
                                array: {
                                    dataType: 'refAlias',
                                    ref: 'ValidationSummary',
                                },
                            },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceItemCategory: {
        dataType: 'refEnum',
        enums: ['mostPopular', 'recentlyUpdated', 'pinned'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewDashboardItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                category: { ref: 'ResourceItemCategory' },
                data: {
                    ref: 'Pick_DashboardBasicDetails.uuid-or-spaceUuid-or-description-or-name-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder-or-updatedAt-or-updatedByUser-or-validationErrors_',
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.DASHBOARD', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.CHART': {
        dataType: 'refEnum',
        enums: ['chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpaceQuery.uuid-or-name-or-chartType-or-chartKind-or-firstViewedAt-or-views-or-pinnedListUuid-or-pinnedListOrder-or-spaceUuid-or-description-or-updatedAt-or-updatedByUser-or-validationErrors-or-slug_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    slug: { dataType: 'string', required: true },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'UpdatedByUser' },
                            { dataType: 'undefined' },
                        ],
                    },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'datetime' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    validationErrors: {
                        dataType: 'union',
                        subSchemas: [
                            {
                                dataType: 'array',
                                array: {
                                    dataType: 'refAlias',
                                    ref: 'ValidationSummary',
                                },
                            },
                            { dataType: 'undefined' },
                        ],
                    },
                    chartType: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'ChartType' },
                            { dataType: 'undefined' },
                        ],
                    },
                    chartKind: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'ChartKind' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewChartItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                category: { ref: 'ResourceItemCategory' },
                data: {
                    dataType: 'intersection',
                    subSchemas: [
                        {
                            ref: 'Pick_SpaceQuery.uuid-or-name-or-chartType-or-chartKind-or-firstViewedAt-or-views-or-pinnedListUuid-or-pinnedListOrder-or-spaceUuid-or-description-or-updatedAt-or-updatedByUser-or-validationErrors-or-slug_',
                        },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                source: { ref: 'ChartSourceType' },
                            },
                        },
                    ],
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.CHART', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.SPACE': {
        dataType: 'refEnum',
        enums: ['space'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Space.projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-organizationUuid_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    isPrivate: { dataType: 'boolean', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewSpaceItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    dataType: 'intersection',
                    subSchemas: [
                        {
                            ref: 'Pick_Space.projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-organizationUuid_',
                        },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                chartCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                                dashboardCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                                accessListLength: {
                                    dataType: 'double',
                                    required: true,
                                },
                                access: {
                                    dataType: 'array',
                                    array: { dataType: 'string' },
                                    required: true,
                                },
                            },
                        },
                    ],
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.SPACE', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PinnedItems: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'ResourceViewDashboardItem' },
                    { ref: 'ResourceViewChartItem' },
                    { ref: 'ResourceViewSpaceItem' },
                ],
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiPinnedItems: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PinnedItems', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewItemType: {
        dataType: 'refEnum',
        enums: ['chart', 'dashboard', 'space'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ResourceViewItem-at-data.uuid-or-pinnedListOrder_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                uuid: { dataType: 'string', required: true },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdatePinnedItemOrder: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    ref: 'Pick_ResourceViewItem-at-data.uuid-or-pinnedListOrder_',
                    required: true,
                },
                type: { ref: 'ResourceViewItemType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Organization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                defaultProjectUuid: { dataType: 'string' },
                needsProject: { dataType: 'boolean' },
                chartColors: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                name: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Organization', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Organization.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateOrganization: {
        dataType: 'refAlias',
        type: { ref: 'Pick_Organization.name_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Partial_Omit_Organization.organizationUuid-or-needsProject__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                chartColors: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'array', array: { dataType: 'string' } },
                        { dataType: 'undefined' },
                    ],
                },
                defaultProjectUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateOrganization: {
        dataType: 'refAlias',
        type: {
            ref: 'Partial_Omit_Organization.organizationUuid-or-needsProject__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WarehouseTypes: {
        dataType: 'refEnum',
        enums: [
            'bigquery',
            'postgres',
            'redshift',
            'snowflake',
            'databricks',
            'trino',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationProject: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                requireUserCredentials: { dataType: 'boolean', required: true },
                warehouseType: { ref: 'WarehouseTypes', required: true },
                upstreamProjectUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdByUserUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                type: { ref: 'ProjectType', required: true },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationProjects: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'OrganizationProject' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                isPending: { dataType: 'boolean' },
                isInviteExpired: { dataType: 'boolean' },
                isActive: { dataType: 'boolean', required: true },
                role: { ref: 'OrganizationMemberRole', required: true },
                organizationUuid: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                userUpdatedAt: { dataType: 'datetime', required: true },
                userCreatedAt: { dataType: 'datetime', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    KnexPaginateArgs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                page: { dataType: 'double', required: true },
                pageSize: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'KnexPaginatedData_OrganizationMemberProfile-Array_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pagination: {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'KnexPaginateArgs' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                totalResults: {
                                    dataType: 'double',
                                    required: true,
                                },
                                totalPageCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
                data: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'OrganizationMemberProfile',
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationMemberProfiles: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'KnexPaginatedData_OrganizationMemberProfile-Array_',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'OrganizationMemberProfile', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UUID: {
        dataType: 'refAlias',
        type: {
            dataType: 'string',
            validators: {
                pattern: {
                    value: '[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}',
                },
            },
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberProfileUpdate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'OrganizationMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.EDITOR': {
        dataType: 'refEnum',
        enums: ['editor'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.INTERACTIVE_VIEWER': {
        dataType: 'refEnum',
        enums: ['interactive_viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.VIEWER': {
        dataType: 'refEnum',
        enums: ['viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.MEMBER': {
        dataType: 'refEnum',
        enums: ['member'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomainsRole: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'OrganizationMemberRole.EDITOR' },
                { ref: 'OrganizationMemberRole.INTERACTIVE_VIEWER' },
                { ref: 'OrganizationMemberRole.VIEWER' },
                { ref: 'OrganizationMemberRole.MEMBER' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.EDITOR': {
        dataType: 'refEnum',
        enums: ['editor'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.INTERACTIVE_VIEWER': {
        dataType: 'refEnum',
        enums: ['interactive_viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.VIEWER': {
        dataType: 'refEnum',
        enums: ['viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomainProjectsRole: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ProjectMemberRole.EDITOR' },
                { ref: 'ProjectMemberRole.INTERACTIVE_VIEWER' },
                { ref: 'ProjectMemberRole.VIEWER' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                projects: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            role: {
                                ref: 'AllowedEmailDomainProjectsRole',
                                required: true,
                            },
                            projectUuid: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                role: { ref: 'AllowedEmailDomainsRole', required: true },
                emailDomains: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationAllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'AllowedEmailDomains', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_AllowedEmailDomains.Exclude_keyofAllowedEmailDomains.organizationUuid__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    role: { ref: 'AllowedEmailDomainsRole', required: true },
                    emailDomains: {
                        dataType: 'array',
                        array: { dataType: 'string' },
                        required: true,
                    },
                    projects: {
                        dataType: 'array',
                        array: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                role: {
                                    ref: 'AllowedEmailDomainProjectsRole',
                                    required: true,
                                },
                                projectUuid: {
                                    dataType: 'string',
                                    required: true,
                                },
                            },
                        },
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_AllowedEmailDomains.organizationUuid_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_AllowedEmailDomains.Exclude_keyofAllowedEmailDomains.organizationUuid__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateAllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_AllowedEmailDomains.organizationUuid_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Group: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                organizationUuid: { dataType: 'string', required: true },
                updatedByUserUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                updatedAt: { dataType: 'datetime', required: true },
                createdByUserUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GroupMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GroupWithMembers: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Group' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        memberUuids: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        members: {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'GroupMember' },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateGroupResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'GroupWithMembers', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Group.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_GroupMember.userUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateGroup: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Pick_Group.name_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        members: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'Pick_GroupMember.userUuid_',
                            },
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'KnexPaginatedData_Group-Array-or-GroupWithMembers-Array_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pagination: {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'KnexPaginateArgs' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                totalResults: {
                                    dataType: 'double',
                                    required: true,
                                },
                                totalPageCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
                data: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'Group' },
                        },
                        {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'GroupWithMembers',
                            },
                        },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'KnexPaginatedData_Group-Array-or-GroupWithMembers-Array_',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NotificationBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                url: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                message: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                resourceUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                viewed: { dataType: 'boolean', required: true },
                createdAt: { dataType: 'datetime', required: true },
                notificationId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ApiNotificationResourceType.DashboardComments': {
        dataType: 'refEnum',
        enums: ['dashboardComments'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NotificationDashboardTileCommentMetadata: {
        dataType: 'refObject',
        properties: {
            dashboardUuid: { dataType: 'string', required: true },
            dashboardName: { dataType: 'string', required: true },
            dashboardTileUuid: { dataType: 'string', required: true },
            dashboardTileName: { dataType: 'string', required: true },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NotificationDashboardComment: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'NotificationBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        metadata: {
                            dataType: 'union',
                            subSchemas: [
                                {
                                    ref: 'NotificationDashboardTileCommentMetadata',
                                },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        resourceType: {
                            ref: 'ApiNotificationResourceType.DashboardComments',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Notification: {
        dataType: 'refAlias',
        type: { ref: 'NotificationDashboardComment', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiNotificationsResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'Notification' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetNotifications: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ApiNotificationsResults', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiNotificationResourceType: {
        dataType: 'refEnum',
        enums: ['dashboardComments'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Notification.viewed_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                viewed: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiNotificationUpdateParams: {
        dataType: 'refAlias',
        type: { ref: 'Pick_Notification.viewed_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.Record_string.string-or-string-Array__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                ref: 'Record_string.string-or-string-Array_',
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompiledMetric: {
        dataType: 'refObject',
        properties: {
            fieldType: { ref: 'FieldType.METRIC', required: true },
            type: { ref: 'MetricType', required: true },
            name: { dataType: 'string', required: true },
            label: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            tableLabel: { dataType: 'string', required: true },
            sql: { dataType: 'string', required: true },
            description: { dataType: 'string' },
            source: {
                dataType: 'union',
                subSchemas: [{ ref: 'Source' }, { dataType: 'undefined' }],
            },
            hidden: { dataType: 'boolean', required: true },
            compact: { ref: 'CompactOrAlias' },
            round: { dataType: 'double' },
            format: { ref: 'Format' },
            groupLabel: { dataType: 'string' },
            groups: { dataType: 'array', array: { dataType: 'string' } },
            urls: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'FieldUrl' },
            },
            index: { dataType: 'double' },
            tags: { dataType: 'array', array: { dataType: 'string' } },
            isAutoGenerated: { dataType: 'boolean', required: true },
            showUnderlyingValues: {
                dataType: 'array',
                array: { dataType: 'string' },
            },
            filters: {
                dataType: 'array',
                array: { dataType: 'refObject', ref: 'MetricFilterRule' },
            },
            percentile: { dataType: 'double' },
            formatOptions: { ref: 'CustomFormat' },
            dimensionReference: { dataType: 'string' },
            requiredAttributes: {
                ref: 'Record_string.string-or-string-Array_',
            },
            defaultTimeDimension: { ref: 'DefaultTimeDimension' },
            spotlight: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    visibility: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'enum', enums: ['show'] },
                            { dataType: 'enum', enums: ['hide'] },
                        ],
                        required: true,
                    },
                },
            },
            compiledSql: { dataType: 'string', required: true },
            tablesReferences: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'array', array: { dataType: 'string' } },
                    { dataType: 'undefined' },
                ],
                required: true,
            },
            tablesRequiredAttributes: {
                ref: 'Record_string.Record_string.string-or-string-Array__',
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'FieldType.DIMENSION': {
        dataType: 'refEnum',
        enums: ['dimension'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompiledDimension: {
        dataType: 'refObject',
        properties: {
            fieldType: { ref: 'FieldType.DIMENSION', required: true },
            type: { ref: 'DimensionType', required: true },
            name: { dataType: 'string', required: true },
            label: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            tableLabel: { dataType: 'string', required: true },
            sql: { dataType: 'string', required: true },
            description: { dataType: 'string' },
            source: {
                dataType: 'union',
                subSchemas: [{ ref: 'Source' }, { dataType: 'undefined' }],
            },
            hidden: { dataType: 'boolean', required: true },
            compact: { ref: 'CompactOrAlias' },
            round: { dataType: 'double' },
            format: { ref: 'Format' },
            groupLabel: { dataType: 'string' },
            groups: { dataType: 'array', array: { dataType: 'string' } },
            urls: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'FieldUrl' },
            },
            index: { dataType: 'double' },
            tags: { dataType: 'array', array: { dataType: 'string' } },
            group: { dataType: 'string' },
            requiredAttributes: {
                ref: 'Record_string.string-or-string-Array_',
            },
            timeInterval: { ref: 'TimeFrames' },
            timeIntervalBaseDimensionName: { dataType: 'string' },
            isAdditionalDimension: { dataType: 'boolean' },
            colors: { ref: 'Record_string.string_' },
            isIntervalBase: { dataType: 'boolean' },
            compiledSql: { dataType: 'string', required: true },
            tablesReferences: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'array', array: { dataType: 'string' } },
                    { dataType: 'undefined' },
                ],
                required: true,
            },
            tablesRequiredAttributes: {
                ref: 'Record_string.Record_string.string-or-string-Array__',
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DimensionType.DATE': {
        dataType: 'refEnum',
        enums: ['date'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DimensionType.TIMESTAMP': {
        dataType: 'refEnum',
        enums: ['timestamp'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricWithAssociatedTimeDimension: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'CompiledMetric' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        availableTimeDimensions: {
                            dataType: 'array',
                            array: {
                                dataType: 'intersection',
                                subSchemas: [
                                    { ref: 'CompiledDimension' },
                                    {
                                        dataType: 'nestedObjectLiteral',
                                        nestedProperties: {
                                            type: {
                                                dataType: 'union',
                                                subSchemas: [
                                                    {
                                                        ref: 'DimensionType.DATE',
                                                    },
                                                    {
                                                        ref: 'DimensionType.TIMESTAMP',
                                                    },
                                                ],
                                                required: true,
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        timeDimension: {
                            dataType: 'union',
                            subSchemas: [
                                {
                                    dataType: 'intersection',
                                    subSchemas: [
                                        { ref: 'DefaultTimeDimension' },
                                        {
                                            dataType: 'nestedObjectLiteral',
                                            nestedProperties: {
                                                table: {
                                                    dataType: 'string',
                                                    required: true,
                                                },
                                            },
                                        },
                                    ],
                                },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Dimension: {
        dataType: 'refObject',
        properties: {
            fieldType: { ref: 'FieldType.DIMENSION', required: true },
            type: { ref: 'DimensionType', required: true },
            name: { dataType: 'string', required: true },
            label: { dataType: 'string', required: true },
            table: { dataType: 'string', required: true },
            tableLabel: { dataType: 'string', required: true },
            sql: { dataType: 'string', required: true },
            description: { dataType: 'string' },
            source: {
                dataType: 'union',
                subSchemas: [{ ref: 'Source' }, { dataType: 'undefined' }],
            },
            hidden: { dataType: 'boolean', required: true },
            compact: { ref: 'CompactOrAlias' },
            round: { dataType: 'double' },
            format: { ref: 'Format' },
            groupLabel: { dataType: 'string' },
            groups: { dataType: 'array', array: { dataType: 'string' } },
            urls: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'FieldUrl' },
            },
            index: { dataType: 'double' },
            tags: { dataType: 'array', array: { dataType: 'string' } },
            group: { dataType: 'string' },
            requiredAttributes: {
                ref: 'Record_string.string-or-string-Array_',
            },
            timeInterval: { ref: 'TimeFrames' },
            timeIntervalBaseDimensionName: { dataType: 'string' },
            isAdditionalDimension: { dataType: 'boolean' },
            colors: { ref: 'Record_string.string_' },
            isIntervalBase: { dataType: 'boolean' },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.Field-or-TableCalculation-or-CustomDimension-or-Metric_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'TableCalculation' },
                    { ref: 'CustomDimension' },
                    { ref: 'Field' },
                    { ref: 'Metric' },
                ],
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ItemsMap: {
        dataType: 'refAlias',
        type: {
            ref: 'Record_string.Field-or-TableCalculation-or-CustomDimension-or-Metric_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricExploreDataPoint: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                compareMetric: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        label: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        value: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'double' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                    },
                    required: true,
                },
                metric: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        label: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        value: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'double' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                    },
                    required: true,
                },
                segment: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                date: { dataType: 'datetime', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricExploreDataPointWithDateValue: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'MetricExploreDataPoint' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dateValue: { dataType: 'double', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricsExplorerQueryResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                hasFilteredSeries: { dataType: 'boolean', required: true },
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'MetricExploreDataPointWithDateValue',
                    },
                    required: true,
                },
                fields: { ref: 'ItemsMap', required: true },
                segmentDimension: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'Dimension' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                compareMetric: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'MetricWithAssociatedTimeDimension' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                metric: {
                    ref: 'MetricWithAssociatedTimeDimension',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsExplorerQueryResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'MetricsExplorerQueryResults', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TimeDimensionConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'DefaultTimeDimension' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        table: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'MetricExplorerComparison.NONE': {
        dataType: 'refEnum',
        enums: ['none'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'MetricExplorerComparison.PREVIOUS_PERIOD': {
        dataType: 'refEnum',
        enums: ['previous_period'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'MetricExplorerComparison.DIFFERENT_METRIC': {
        dataType: 'refEnum',
        enums: ['different_metric'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricExplorerQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        segmentDimension: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        comparison: {
                            ref: 'MetricExplorerComparison.NONE',
                            required: true,
                        },
                    },
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        comparison: {
                            ref: 'MetricExplorerComparison.PREVIOUS_PERIOD',
                            required: true,
                        },
                    },
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        metric: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                name: { dataType: 'string', required: true },
                                table: { dataType: 'string', required: true },
                                label: { dataType: 'string', required: true },
                            },
                            required: true,
                        },
                        comparison: {
                            ref: 'MetricExplorerComparison.DIFFERENT_METRIC',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricTotalResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metric: {
                    ref: 'MetricWithAssociatedTimeDimension',
                    required: true,
                },
                comparisonValue: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                value: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsExplorerTotalResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'MetricTotalResults', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricTotalComparisonType: {
        dataType: 'refEnum',
        enums: ['none', 'previous_period'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'union',
                    subSchemas: [{ ref: 'Group' }, { ref: 'GroupWithMembers' }],
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupMembersResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'GroupMember' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateGroupWithMembers: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                members: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_GroupMember.userUuid_',
                    },
                },
                name: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateProjectGroupAccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ProjectGroupAccess', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDBProjectGroupAccess.role_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUpdateProjectGroupAccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ProjectGroupAccess', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DBProjectGroupAccess.role_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateDBProjectGroupAccess: {
        dataType: 'refAlias',
        type: { ref: 'Pick_DBProjectGroupAccess.role_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGdriveAccessTokenResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'string', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomLabel: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { dataType: 'string' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PivotConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rowTotals: { dataType: 'boolean' },
                columnTotals: { dataType: 'boolean' },
                summableMetricFieldIds: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                hiddenMetricFieldIds: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                columnOrder: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                metricsAsRows: { dataType: 'boolean', required: true },
                pivotDimensions: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UploadMetricGsheet: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pivotConfig: { ref: 'PivotConfig' },
                hiddenFields: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                customLabels: { ref: 'CustomLabel' },
                columnOrder: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                showTableNames: { dataType: 'boolean', required: true },
                metricQuery: { ref: 'MetricQueryResponse', required: true },
                exploreId: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GitRepo: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                ownerLogin: { dataType: 'string', required: true },
                fullName: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GitIntegrationConfiguration: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                enabled: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ExploreType: {
        dataType: 'refEnum',
        enums: ['virtual', 'default'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Explore.SummaryExploreFields_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'ExploreType' },
                        { dataType: 'undefined' },
                    ],
                },
                label: { dataType: 'string', required: true },
                tags: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                groupLabel: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SummaryExtraFields: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                databaseName: { dataType: 'string', required: true },
                schemaName: { dataType: 'string', required: true },
                description: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    InlineErrorType: {
        dataType: 'refEnum',
        enums: ['METADATA_PARSE_ERROR', 'NO_DIMENSIONS_FOUND'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    InlineError: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                message: { dataType: 'string', required: true },
                type: { ref: 'InlineErrorType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ExploreError.SummaryExploreErrorFields_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'ExploreType' },
                        { dataType: 'undefined' },
                    ],
                },
                label: { dataType: 'string', required: true },
                tags: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'array', array: { dataType: 'string' } },
                        { dataType: 'undefined' },
                    ],
                },
                groupLabel: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                errors: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'InlineError' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Partial_SummaryExtraFields_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                schemaName: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                databaseName: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SummaryExplore: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'Pick_Explore.SummaryExploreFields_' },
                        { ref: 'SummaryExtraFields' },
                    ],
                },
                {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'Pick_ExploreError.SummaryExploreErrorFields_' },
                        { ref: 'Partial_SummaryExtraFields_' },
                    ],
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiExploresResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'SummaryExplore' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtModelJoinType: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { dataType: 'enum', enums: ['inner'] },
                { dataType: 'enum', enums: ['full'] },
                { dataType: 'enum', enums: ['left'] },
                { dataType: 'enum', enums: ['right'] },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ExploreJoin.table-or-sqlOn-or-type-or-hidden-or-always_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'DbtModelJoinType' },
                        { dataType: 'undefined' },
                    ],
                },
                hidden: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
                table: { dataType: 'string', required: true },
                sqlOn: { dataType: 'string', required: true },
                always: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'boolean' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompiledExploreJoin: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_ExploreJoin.table-or-sqlOn-or-type-or-hidden-or-always_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        compiledSqlOn: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrderFieldsByStrategy: {
        dataType: 'refEnum',
        enums: ['LABEL', 'INDEX'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GroupType: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                description: { dataType: 'string' },
                label: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.GroupType_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'GroupType' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                defaultTimeDimension: { ref: 'DefaultTimeDimension' },
                groupDetails: { ref: 'Record_string.GroupType_' },
                requiredAttributes: {
                    ref: 'Record_string.string-or-string-Array_',
                },
                hidden: { dataType: 'boolean' },
                requiredFilters: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'MetricFilterRule' },
                },
                sqlWhere: { dataType: 'string' },
                groupLabel: { dataType: 'string' },
                orderFieldsBy: { ref: 'OrderFieldsByStrategy' },
                sqlTable: { dataType: 'string', required: true },
                schema: { dataType: 'string', required: true },
                database: { dataType: 'string', required: true },
                description: { dataType: 'string' },
                originalName: { dataType: 'string' },
                label: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.CompiledDimension_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'CompiledDimension' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.CompiledMetric_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: { ref: 'CompiledMetric' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LineageNodeDependency: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['model'] },
                        { dataType: 'enum', enums: ['seed'] },
                        { dataType: 'enum', enums: ['source'] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.LineageNodeDependency-Array_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            additionalProperties: {
                dataType: 'array',
                array: { dataType: 'refAlias', ref: 'LineageNodeDependency' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LineageGraph: {
        dataType: 'refAlias',
        type: {
            ref: 'Record_string.LineageNodeDependency-Array_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompiledTable: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'TableBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        uncompiledSqlWhere: { dataType: 'string' },
                        source: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'Source' },
                                { dataType: 'undefined' },
                            ],
                        },
                        lineageGraph: { ref: 'LineageGraph', required: true },
                        metrics: {
                            ref: 'Record_string.CompiledMetric_',
                            required: true,
                        },
                        dimensions: {
                            ref: 'Record_string.CompiledDimension_',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SupportedDbtAdapter: {
        dataType: 'refEnum',
        enums: [
            'bigquery',
            'databricks',
            'snowflake',
            'redshift',
            'postgres',
            'trino',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Explore.Exclude_keyofExplore.unfilteredTables__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                type: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'ExploreType' },
                        { dataType: 'undefined' },
                    ],
                },
                label: { dataType: 'string', required: true },
                spotlight: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                visibility: {
                                    dataType: 'union',
                                    subSchemas: [
                                        { dataType: 'enum', enums: ['show'] },
                                        { dataType: 'enum', enums: ['hide'] },
                                    ],
                                    required: true,
                                },
                            },
                        },
                        { dataType: 'undefined' },
                    ],
                },
                warehouse: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                tags: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                groupLabel: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                baseTable: { dataType: 'string', required: true },
                joinedTables: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'CompiledExploreJoin' },
                    required: true,
                },
                tables: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {},
                    additionalProperties: { ref: 'CompiledTable' },
                    required: true,
                },
                targetDatabase: { ref: 'SupportedDbtAdapter', required: true },
                ymlPath: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                sqlPath: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_Explore.unfilteredTables_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_Explore.Exclude_keyofExplore.unfilteredTables__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiExploreResults: {
        dataType: 'refAlias',
        type: { ref: 'Omit_Explore.unfilteredTables_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCompiledQueryResults: {
        dataType: 'refAlias',
        type: { dataType: 'string', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiPromoteDashboardResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'DashboardDAO', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCsvUrlResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        truncated: { dataType: 'boolean', required: true },
                        status: { dataType: 'string', required: true },
                        url: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateComment: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'string', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Comment.text-or-replyTo-or-mentions-or-textHtml_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                text: { dataType: 'string', required: true },
                replyTo: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                mentions: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                textHtml: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Comment: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                mentions: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                canRemove: { dataType: 'boolean', required: true },
                resolved: { dataType: 'boolean', required: true },
                replies: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'Comment' },
                },
                replyTo: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                user: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        name: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                textHtml: { dataType: 'string', required: true },
                text: { dataType: 'string', required: true },
                commentId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetComments: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {},
                    additionalProperties: {
                        dataType: 'array',
                        array: { dataType: 'refAlias', ref: 'Comment' },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiResolveComment: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Field.name-or-label-or-fieldType-or-tableLabel-or-description_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                },
                label: { dataType: 'string', required: true },
                fieldType: { ref: 'FieldType', required: true },
                tableLabel: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dimension.requiredAttributes_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                requiredAttributes: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'Record_string.string-or-string-Array_' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CatalogType.Field': {
        dataType: 'refEnum',
        enums: ['field'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Tag.name-or-color-or-tagUuid_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                color: { dataType: 'string', required: true },
                tagUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmojiIcon: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                unicode: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CustomIcon: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { url: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogItemIcon: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [{ ref: 'EmojiIcon' }, { ref: 'CustomIcon' }],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogField: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Field.name-or-label-or-fieldType-or-tableLabel-or-description_',
                },
                { ref: 'Pick_Dimension.requiredAttributes_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        icon: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'CatalogItemIcon' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        chartUsage: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'double' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        categories: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'Pick_Tag.name-or-color-or-tagUuid_',
                            },
                            required: true,
                        },
                        tags: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                        },
                        tableGroupLabel: { dataType: 'string' },
                        tableName: { dataType: 'string', required: true },
                        basicType: { dataType: 'string' },
                        type: { ref: 'CatalogType.Field', required: true },
                        catalogSearchUuid: {
                            dataType: 'string',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_TableBase.name-or-label-or-groupLabel-or-description-or-requiredAttributes_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    description: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    label: { dataType: 'string', required: true },
                    groupLabel: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                    },
                    requiredAttributes: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'Record_string.string-or-string-Array_' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'CatalogType.Table': {
        dataType: 'refEnum',
        enums: ['table'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogTable: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_TableBase.name-or-label-or-groupLabel-or-description-or-requiredAttributes_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        icon: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'CatalogItemIcon' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        chartUsage: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'double' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        joinedTables: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'CompiledExploreJoin',
                            },
                        },
                        categories: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'Pick_Tag.name-or-color-or-tagUuid_',
                            },
                            required: true,
                        },
                        tags: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                        },
                        groupLabel: { dataType: 'string' },
                        type: { ref: 'CatalogType.Table', required: true },
                        errors: {
                            dataType: 'array',
                            array: { dataType: 'refAlias', ref: 'InlineError' },
                        },
                        catalogSearchUuid: {
                            dataType: 'string',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [{ ref: 'CatalogField' }, { ref: 'CatalogTable' }],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCatalogResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'CatalogItem' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogType: {
        dataType: 'refEnum',
        enums: ['table', 'field'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogFilter: {
        dataType: 'refEnum',
        enums: ['tables', 'dimensions', 'metrics'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogMetadata: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                fieldType: { ref: 'FieldType' },
                tableLabel: { dataType: 'string' },
                joinedTables: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                fields: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'CatalogField' },
                    required: true,
                },
                source: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                modelName: { dataType: 'string', required: true },
                label: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCatalogMetadataResults: {
        dataType: 'refAlias',
        type: { ref: 'CatalogMetadata', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ChartSummary.uuid-or-name-or-spaceUuid-or-spaceName-or-dashboardName-or-dashboardUuid-or-chartKind_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    spaceName: { dataType: 'string', required: true },
                    dashboardUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    dashboardName: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    chartKind: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'ChartKind' },
                            { dataType: 'undefined' },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogAnalytics: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                charts: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_ChartSummary.uuid-or-name-or-spaceUuid-or-spaceName-or-dashboardName-or-dashboardUuid-or-chartKind_',
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCatalogAnalyticsResults: {
        dataType: 'refAlias',
        type: { ref: 'CatalogAnalytics', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsCatalogResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'CatalogField' },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    KnexPaginatedData_ApiMetricsCatalogResults_: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pagination: {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'KnexPaginateArgs' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                totalResults: {
                                    dataType: 'double',
                                    required: true,
                                },
                                totalPageCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
                data: { ref: 'ApiMetricsCatalogResults', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsCatalog: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'KnexPaginatedData_ApiMetricsCatalogResults_',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSortDirection: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { dataType: 'enum', enums: ['asc'] },
                { dataType: 'enum', enums: ['desc'] },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetMetricPeek: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'MetricWithAssociatedTimeDimension',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsWithAssociatedTimeDimensionResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'MetricWithAssociatedTimeDimension',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSegmentDimensionsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'CompiledDimension' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CatalogField.catalogSearchUuid-or-name-or-tableName_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                tableName: { dataType: 'string', required: true },
                catalogSearchUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogMetricsTreeNode: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CatalogField.catalogSearchUuid-or-name-or-tableName_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CatalogMetricsTreeEdge: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                projectUuid: { dataType: 'string', required: true },
                createdByUserUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                target: { ref: 'CatalogMetricsTreeNode', required: true },
                source: { ref: 'CatalogMetricsTreeNode', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetMetricsTree: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        edges: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'CatalogMetricsTreeEdge',
                            },
                            required: true,
                        },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiMetricsTreeEdgePayload: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                targetCatalogSearchUuid: { dataType: 'string', required: true },
                sourceCatalogSearchUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerClientInfo: {
        dataType: 'refObject',
        properties: {
            name: { dataType: 'string', required: true },
            features: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    views: { dataType: 'boolean', required: true },
                },
                required: true,
            },
            config: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    maxQueryLimit: { dataType: 'double', required: true },
                },
                required: true,
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSemanticLayerClientInfo: {
        dataType: 'refObject',
        properties: {
            status: { dataType: 'enum', enums: ['ok'], required: true },
            results: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'SemanticLayerClientInfo' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerView: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                visible: { dataType: 'boolean', required: true },
                description: { dataType: 'string' },
                label: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFieldType: {
        dataType: 'refEnum',
        enums: ['time', 'number', 'string', 'boolean'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerTimeGranularity: {
        dataType: 'refEnum',
        enums: [
            'NANOSECOND',
            'MICROSECOND',
            'MILLISECOND',
            'SECOND',
            'MINUTE',
            'HOUR',
            'DAY',
            'WEEK',
            'MONTH',
            'QUARTER',
            'YEAR',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFilterBaseOperator: {
        dataType: 'refEnum',
        enums: ['IS', 'IS_NOT'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerField: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                availableOperators: {
                    dataType: 'array',
                    array: {
                        dataType: 'refEnum',
                        ref: 'SemanticLayerFilterBaseOperator',
                    },
                    required: true,
                },
                availableGranularities: {
                    dataType: 'array',
                    array: {
                        dataType: 'refEnum',
                        ref: 'SemanticLayerTimeGranularity',
                    },
                    required: true,
                },
                aggType: { ref: 'VizAggregationOptions' },
                visible: { dataType: 'boolean', required: true },
                description: { dataType: 'string' },
                kind: { ref: 'FieldType', required: true },
                type: { ref: 'SemanticLayerFieldType', required: true },
                label: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SemanticLayerField.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SemanticLayerTimeDimension.name-or-granularity_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SemanticLayerQuery.dimensions-or-timeDimensions-or-metrics_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                dimensions: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerField.name_',
                    },
                    required: true,
                },
                timeDimensions: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerTimeDimension.name-or-granularity_',
                    },
                    required: true,
                },
                metrics: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerField.name_',
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SemanticLayerField.name-or-kind_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                kind: { ref: 'FieldType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerSortBy: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Pick_SemanticLayerField.name-or-kind_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        direction: { ref: 'SortByDirection', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerPivot: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                values: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                index: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                on: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFilterBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                fieldType: { ref: 'SemanticLayerFieldType', required: true },
                fieldKind: { ref: 'FieldType', required: true },
                fieldRef: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'SemanticLayerFieldType.STRING': {
        dataType: 'refEnum',
        enums: ['string'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerStringFilter: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SemanticLayerFilterBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        values: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        operator: {
                            ref: 'SemanticLayerFilterBaseOperator',
                            required: true,
                        },
                        fieldType: {
                            ref: 'SemanticLayerFieldType.STRING',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'SemanticLayerFieldType.TIME': {
        dataType: 'refEnum',
        enums: ['time'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerExactTimeFilter: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SemanticLayerFilterBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        values: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                time: { dataType: 'string', required: true },
                            },
                            required: true,
                        },
                        operator: {
                            ref: 'SemanticLayerFilterBaseOperator',
                            required: true,
                        },
                        fieldType: {
                            ref: 'SemanticLayerFieldType.TIME',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFilterRelativeTimeValue: {
        dataType: 'refEnum',
        enums: ['TODAY', 'YESTERDAY', 'LAST_7_DAYS', 'LAST_30_DAYS'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerRelativeTimeFilter: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SemanticLayerFilterBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        values: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                relativeTime: {
                                    ref: 'SemanticLayerFilterRelativeTimeValue',
                                    required: true,
                                },
                            },
                            required: true,
                        },
                        operator: {
                            ref: 'SemanticLayerFilterBaseOperator',
                            required: true,
                        },
                        fieldType: {
                            ref: 'SemanticLayerFieldType.TIME',
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerTimeFilter: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SemanticLayerExactTimeFilter' },
                { ref: 'SemanticLayerRelativeTimeFilter' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFilterTypes: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SemanticLayerStringFilter' },
                { ref: 'SemanticLayerTimeFilter' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerFilter: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SemanticLayerFilterTypes' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        or: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'SemanticLayerFilter',
                            },
                        },
                        and: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'SemanticLayerFilter',
                            },
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SemanticLayerField.name-or-aggType_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                aggType: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'VizAggregationOptions' },
                        { dataType: 'undefined' },
                    ],
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticLayerQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                customMetrics: {
                    dataType: 'array',
                    array: {
                        dataType: 'intersection',
                        subSchemas: [
                            { ref: 'Pick_SemanticLayerField.name-or-aggType_' },
                            {
                                dataType: 'nestedObjectLiteral',
                                nestedProperties: {
                                    baseDimension: { dataType: 'string' },
                                },
                            },
                        ],
                    },
                },
                sql: { dataType: 'string' },
                filters: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SemanticLayerFilter' },
                    required: true,
                },
                pivot: { ref: 'SemanticLayerPivot' },
                timezone: { dataType: 'string' },
                limit: { dataType: 'double' },
                sortBy: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SemanticLayerSortBy' },
                    required: true,
                },
                metrics: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerField.name_',
                    },
                    required: true,
                },
                timeDimensions: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerTimeDimension.name-or-granularity_',
                    },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Pick_SemanticLayerField.name_',
                    },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticViewerChartCreateResult: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                slug: { dataType: 'string', required: true },
                savedSemanticViewerChartUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSemanticViewerChartCreate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'SemanticViewerChartCreateResult',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticViewerChartCreate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                spaceUuid: { dataType: 'string', required: true },
                config: { ref: 'AllVizChartConfig', required: true },
                semanticLayerQuery: {
                    ref: 'SemanticLayerQuery',
                    required: true,
                },
                semanticLayerView: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SavedSemanticViewerChart: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastViewedAt: { dataType: 'datetime', required: true },
                firstViewedAt: { dataType: 'datetime', required: true },
                views: { dataType: 'double', required: true },
                organization: {
                    ref: 'Pick_Organization.organizationUuid_',
                    required: true,
                },
                project: { ref: 'Pick_Project.projectUuid_', required: true },
                dashboard: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'Pick_Dashboard.uuid-or-name_' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                space: {
                    ref: 'Pick_SpaceSummary.uuid-or-name-or-isPrivate-or-userAccess_',
                    required: true,
                },
                lastUpdatedBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                lastUpdatedAt: { dataType: 'datetime', required: true },
                createdBy: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            ref: 'Pick_LightdashUser.userUuid-or-firstName-or-lastName_',
                        },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                createdAt: { dataType: 'datetime', required: true },
                chartKind: { ref: 'ChartKind', required: true },
                semanticLayerQuery: {
                    ref: 'SemanticLayerQuery',
                    required: true,
                },
                semanticLayerView: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                config: { ref: 'AllVizChartConfig', required: true },
                slug: { dataType: 'string', required: true },
                description: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                name: { dataType: 'string', required: true },
                savedSemanticViewerChartUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSemanticViewerChartGet: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SavedSemanticViewerChart', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticViewerChartUpdateResult: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                savedSemanticViewerChartVersionUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                savedSemanticViewerChartUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSemanticViewerChartUpdate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'SemanticViewerChartUpdateResult',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SemanticViewerChartUpdate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                versionedData: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartKind: { ref: 'ChartKind', required: true },
                        config: { ref: 'AllVizChartConfig', required: true },
                        semanticLayerQuery: {
                            ref: 'SemanticLayerQuery',
                            required: true,
                        },
                        semanticLayerView: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                    },
                },
                unversionedData: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        spaceUuid: { dataType: 'string', required: true },
                        description: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                            required: true,
                        },
                        name: { dataType: 'string', required: true },
                    },
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FeatureFlag: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                enabled: { dataType: 'boolean', required: true },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ContentType.CHART': {
        dataType: 'refEnum',
        enums: ['chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ContentType: {
        dataType: 'refEnum',
        enums: ['chart', 'dashboard'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartContent: {
        dataType: 'refObject',
        properties: {
            contentType: { ref: 'ContentType.CHART', required: true },
            uuid: { dataType: 'string', required: true },
            slug: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            description: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'string' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            createdAt: { dataType: 'datetime', required: true },
            createdBy: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            lastUpdatedAt: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'datetime' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            lastUpdatedBy: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            project: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            organization: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            space: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            pinnedList: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            views: { dataType: 'double', required: true },
            firstViewedAt: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'datetime' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            source: { ref: 'ChartSourceType', required: true },
            chartKind: { ref: 'ChartKind', required: true },
            dashboard: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            name: { dataType: 'string', required: true },
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ContentType.DASHBOARD': {
        dataType: 'refEnum',
        enums: ['dashboard'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardContent: {
        dataType: 'refObject',
        properties: {
            contentType: { ref: 'ContentType.DASHBOARD', required: true },
            uuid: { dataType: 'string', required: true },
            slug: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            description: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'string' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            createdAt: { dataType: 'datetime', required: true },
            createdBy: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            lastUpdatedAt: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'datetime' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            lastUpdatedBy: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            project: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            organization: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            space: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                },
                required: true,
            },
            pinnedList: {
                dataType: 'union',
                subSchemas: [
                    {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            uuid: { dataType: 'string', required: true },
                        },
                    },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
            views: { dataType: 'double', required: true },
            firstViewedAt: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'datetime' },
                    { dataType: 'enum', enums: [null] },
                ],
                required: true,
            },
        },
        additionalProperties: true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SummaryContent: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [{ ref: 'ChartContent' }, { ref: 'DashboardContent' }],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'KnexPaginatedData_SummaryContent-Array_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pagination: {
                    dataType: 'intersection',
                    subSchemas: [
                        { ref: 'KnexPaginateArgs' },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                totalResults: {
                                    dataType: 'double',
                                    required: true,
                                },
                                totalPageCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                            },
                        },
                    ],
                },
                data: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SummaryContent' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiContentResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'KnexPaginatedData_SummaryContent-Array_',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ContentSortByColumns: {
        dataType: 'refEnum',
        enums: ['name', 'space_name', 'last_updated_at'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
    noImplicitAdditionalProperties: 'ignore',
    bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################

    const argsValidationController_post: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                validationTargets: {
                    dataType: 'array',
                    array: { dataType: 'refEnum', ref: 'ValidationTarget' },
                },
                explores: { dataType: 'array', array: { dataType: 'any' } },
            },
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/validate',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(
            ValidationController.prototype.post,
        ),

        async function ValidationController_post(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsValidationController_post,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<ValidationController>(
                        ValidationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'post',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsValidationController_get: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        fromSettings: {
            in: 'query',
            name: 'fromSettings',
            dataType: 'boolean',
        },
        jobId: { in: 'query', name: 'jobId', dataType: 'string' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/validate',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(ValidationController.prototype.get),

        async function ValidationController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsValidationController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<ValidationController>(
                        ValidationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsValidationController_dismiss: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        validationId: {
            in: 'path',
            name: 'validationId',
            required: true,
            dataType: 'double',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/validate/:validationId',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(
            ValidationController.prototype.dismiss,
        ),

        async function ValidationController_dismiss(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsValidationController_dismiss,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<ValidationController>(
                        ValidationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'dismiss',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getAuthenticatedUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/user',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getAuthenticatedUser,
        ),

        async function UserController_getAuthenticatedUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_getAuthenticatedUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getAuthenticatedUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_registerUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'RegisterOrActivateUser',
        },
    };
    app.post(
        '/api/v1/user',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.registerUser,
        ),

        async function UserController_registerUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_registerUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'registerUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_createEmailOneTimePasscode: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.put(
        '/api/v1/user/me/email/otp',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.createEmailOneTimePasscode,
        ),

        async function UserController_createEmailOneTimePasscode(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_createEmailOneTimePasscode,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createEmailOneTimePasscode',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getEmailVerificationStatus: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        passcode: { in: 'query', name: 'passcode', dataType: 'string' },
    };
    app.get(
        '/api/v1/user/me/email/status',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getEmailVerificationStatus,
        ),

        async function UserController_getEmailVerificationStatus(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_getEmailVerificationStatus,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getEmailVerificationStatus',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getOrganizationsUserCanJoin: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/user/me/allowedOrganizations',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getOrganizationsUserCanJoin,
        ),

        async function UserController_getOrganizationsUserCanJoin(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_getOrganizationsUserCanJoin,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getOrganizationsUserCanJoin',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_joinOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        organizationUuid: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            dataType: 'string',
        },
    };
    app.post(
        '/api/v1/user/me/joinOrganization/:organizationUuid',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.joinOrganization,
        ),

        async function UserController_joinOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_joinOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'joinOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_deleteUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/user/me',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.deleteUser,
        ),

        async function UserController_deleteUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_deleteUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getWarehouseCredentials: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/user/warehouseCredentials',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getWarehouseCredentials,
        ),

        async function UserController_getWarehouseCredentials(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_getWarehouseCredentials,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getWarehouseCredentials',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_createWarehouseCredentials: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpsertUserWarehouseCredentials',
        },
    };
    app.post(
        '/api/v1/user/warehouseCredentials',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.createWarehouseCredentials,
        ),

        async function UserController_createWarehouseCredentials(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_createWarehouseCredentials,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createWarehouseCredentials',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_updateWarehouseCredentials: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpsertUserWarehouseCredentials',
        },
    };
    app.patch(
        '/api/v1/user/warehouseCredentials/:uuid',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.updateWarehouseCredentials,
        ),

        async function UserController_updateWarehouseCredentials(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_updateWarehouseCredentials,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateWarehouseCredentials',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_deleteWarehouseCredentials: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
    };
    app.delete(
        '/api/v1/user/warehouseCredentials/:uuid',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.deleteWarehouseCredentials,
        ),

        async function UserController_deleteWarehouseCredentials(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_deleteWarehouseCredentials,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteWarehouseCredentials',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getLoginOptions: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        email: { in: 'query', name: 'email', dataType: 'string' },
    };
    app.get(
        '/api/v1/user/login-options',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getLoginOptions,
        ),

        async function UserController_getLoginOptions(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_getLoginOptions,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getLoginOptions',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_rotatePersonalAccessToken: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        personalAccessTokenUuid: {
            in: 'path',
            name: 'personalAccessTokenUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                expiresAt: { dataType: 'datetime', required: true },
            },
        },
    };
    app.patch(
        '/api/v1/user/me/personal-access-tokens/:personalAccessTokenUuid/rotate',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.rotatePersonalAccessToken,
        ),

        async function UserController_rotatePersonalAccessToken(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserController_rotatePersonalAccessToken,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<UserController>(
                    UserController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'rotatePersonalAccessToken',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserAttributesController_getUserAttributes: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/org/attributes',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.getUserAttributes,
        ),

        async function UserAttributesController_getUserAttributes(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserAttributesController_getUserAttributes,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<UserAttributesController>(
                        UserAttributesController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getUserAttributes',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserAttributesController_createUserAttribute: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateUserAttribute',
        },
    };
    app.post(
        '/api/v1/org/attributes',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.createUserAttribute,
        ),

        async function UserAttributesController_createUserAttribute(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserAttributesController_createUserAttribute,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<UserAttributesController>(
                        UserAttributesController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createUserAttribute',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserAttributesController_updateUserAttribute: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        userAttributeUuid: {
            in: 'path',
            name: 'userAttributeUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateUserAttribute',
        },
    };
    app.put(
        '/api/v1/org/attributes/:userAttributeUuid',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.updateUserAttribute,
        ),

        async function UserAttributesController_updateUserAttribute(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserAttributesController_updateUserAttribute,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<UserAttributesController>(
                        UserAttributesController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateUserAttribute',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserAttributesController_removeUserAttribute: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        userAttributeUuid: {
            in: 'path',
            name: 'userAttributeUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/org/attributes/:userAttributeUuid',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.removeUserAttribute,
        ),

        async function UserAttributesController_removeUserAttribute(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsUserAttributesController_removeUserAttribute,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<UserAttributesController>(
                        UserAttributesController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'removeUserAttribute',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSshController_createSshKeyPair: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/ssh/key-pairs',
        ...fetchMiddlewares<RequestHandler>(SshController),
        ...fetchMiddlewares<RequestHandler>(
            SshController.prototype.createSshKeyPair,
        ),

        async function SshController_createSshKeyPair(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSshController_createSshKeyPair,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SshController>(
                    SshController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createSshKeyPair',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getTables: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/tables',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getTables,
        ),

        async function SqlRunnerController_getTables(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getTables,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getTables',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getTableFields: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        tableName: { in: 'query', name: 'tableName', dataType: 'string' },
        schemaName: { in: 'query', name: 'schemaName', dataType: 'string' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/fields',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getTableFields,
        ),

        async function SqlRunnerController_getTableFields(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getTableFields,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getTableFields',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_runSql: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SqlRunnerBody',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/run',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.runSql,
        ),

        async function SqlRunnerController_runSql(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_runSql,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runSql',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_runSqlPivotQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SqlRunnerPivotQueryBody',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/runPivotQuery',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.runSqlPivotQuery,
        ),

        async function SqlRunnerController_runSqlPivotQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_runSqlPivotQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runSqlPivotQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getLocalResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        fileId: {
            in: 'path',
            name: 'fileId',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/results/:fileId',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getLocalResults,
        ),

        async function SqlRunnerController_getLocalResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getLocalResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getLocalResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getSavedSqlChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/:uuid',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getSavedSqlChart,
        ),

        async function SqlRunnerController_getSavedSqlChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getSavedSqlChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSqlChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getSavedSqlChartBySlug: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        slug: { in: 'path', name: 'slug', required: true, dataType: 'string' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/slug/:slug',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getSavedSqlChartBySlug,
        ),

        async function SqlRunnerController_getSavedSqlChartBySlug(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getSavedSqlChartBySlug,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSqlChartBySlug',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getSavedSqlResultsJob: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        slug: { in: 'path', name: 'slug', required: true, dataType: 'string' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/slug/:slug/results-job',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getSavedSqlResultsJob,
        ),

        async function SqlRunnerController_getSavedSqlResultsJob(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getSavedSqlResultsJob,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSqlResultsJob',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_getSavedSqlResultsJobByUuid: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/:uuid/results-job',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.getSavedSqlResultsJobByUuid,
        ),

        async function SqlRunnerController_getSavedSqlResultsJobByUuid(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_getSavedSqlResultsJobByUuid,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSqlResultsJobByUuid',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_createSqlChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateSqlChart',
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/saved',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.createSqlChart,
        ),

        async function SqlRunnerController_createSqlChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_createSqlChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createSqlChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_updateSqlChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateSqlChart',
        },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/:uuid',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.updateSqlChart,
        ),

        async function SqlRunnerController_updateSqlChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_updateSqlChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateSqlChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_deleteSqlChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/sqlRunner/saved/:uuid',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.deleteSqlChart,
        ),

        async function SqlRunnerController_deleteSqlChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_deleteSqlChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteSqlChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_refreshSqlRunnerCatalog: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/refresh-catalog',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.refreshSqlRunnerCatalog,
        ),

        async function SqlRunnerController_refreshSqlRunnerCatalog(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_refreshSqlRunnerCatalog,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'refreshSqlRunnerCatalog',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_createVirtualView: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateVirtualViewPayload',
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/virtual-view',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.createVirtualView,
        ),

        async function SqlRunnerController_createVirtualView(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_createVirtualView,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createVirtualView',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_updateVirtualView: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        name: { in: 'path', name: 'name', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateVirtualViewPayload',
        },
    };
    app.put(
        '/api/v1/projects/:projectUuid/sqlRunner/virtual-view/:name',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.updateVirtualView,
        ),

        async function SqlRunnerController_updateVirtualView(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_updateVirtualView,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateVirtualView',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_deleteVirtualView: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        name: { in: 'path', name: 'name', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/sqlRunner/virtual-view/:name',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.deleteVirtualView,
        ),

        async function SqlRunnerController_deleteVirtualView(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_deleteVirtualView,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteVirtualView',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_writeBackPreview: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateVirtualViewPayload',
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/preview',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.writeBackPreview,
        ),

        async function SqlRunnerController_writeBackPreview(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_writeBackPreview,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'writeBackPreview',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSqlRunnerController_writeBackCreatePr: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateVirtualViewPayload',
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlRunner/pull-request',
        ...fetchMiddlewares<RequestHandler>(SqlRunnerController),
        ...fetchMiddlewares<RequestHandler>(
            SqlRunnerController.prototype.writeBackCreatePr,
        ),

        async function SqlRunnerController_writeBackCreatePr(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSqlRunnerController_writeBackCreatePr,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SqlRunnerController>(
                        SqlRunnerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'writeBackCreatePr',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpotlightController_postSpotlightTableConfig: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'Pick_SpotlightTableConfig.columnConfig_',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/spotlight/table/config',
        ...fetchMiddlewares<RequestHandler>(SpotlightController),
        ...fetchMiddlewares<RequestHandler>(
            SpotlightController.prototype.postSpotlightTableConfig,
        ),

        async function SpotlightController_postSpotlightTableConfig(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpotlightController_postSpotlightTableConfig,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SpotlightController>(
                        SpotlightController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'postSpotlightTableConfig',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpotlightController_getSpotlightTableConfig: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/spotlight/table/config',
        ...fetchMiddlewares<RequestHandler>(SpotlightController),
        ...fetchMiddlewares<RequestHandler>(
            SpotlightController.prototype.getSpotlightTableConfig,
        ),

        async function SpotlightController_getSpotlightTableConfig(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpotlightController_getSpotlightTableConfig,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SpotlightController>(
                        SpotlightController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSpotlightTableConfig',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpotlightController_resetSpotlightTableConfig: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/spotlight/table/config',
        ...fetchMiddlewares<RequestHandler>(SpotlightController),
        ...fetchMiddlewares<RequestHandler>(
            SpotlightController.prototype.resetSpotlightTableConfig,
        ),

        async function SpotlightController_resetSpotlightTableConfig(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpotlightController_resetSpotlightTableConfig,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SpotlightController>(
                        SpotlightController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'resetSpotlightTableConfig',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_getSpace: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(SpaceController.prototype.getSpace),

        async function SpaceController_getSpace(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_getSpace,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSpace',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_createSpace: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: { in: 'body', name: 'body', required: true, ref: 'CreateSpace' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/spaces',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.createSpace,
        ),

        async function SpaceController_createSpace(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_createSpace,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createSpace',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_deleteSpace: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.deleteSpace,
        ),

        async function SpaceController_deleteSpace(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_deleteSpace,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteSpace',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 204,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_updateSpace: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        body: { in: 'body', name: 'body', required: true, ref: 'UpdateSpace' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.updateSpace,
        ),

        async function SpaceController_updateSpace(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_updateSpace,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateSpace',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_addSpaceUserAccess: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'AddSpaceUserAccess',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/share',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.addSpaceUserAccess,
        ),

        async function SpaceController_addSpaceUserAccess(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_addSpaceUserAccess,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'addSpaceUserAccess',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_revokeSpaceAccessForUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/share/:userUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.revokeSpaceAccessForUser,
        ),

        async function SpaceController_revokeSpaceAccessForUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_revokeSpaceAccessForUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'revokeSpaceAccessForUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_addSpaceGroupAccess: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'AddSpaceGroupAccess',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/group/share',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.addSpaceGroupAccess,
        ),

        async function SpaceController_addSpaceGroupAccess(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_addSpaceGroupAccess,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'addSpaceGroupAccess',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSpaceController_revokeGroupSpaceAccess: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        spaceUuid: {
            in: 'path',
            name: 'spaceUuid',
            required: true,
            dataType: 'string',
        },
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/group/share/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.revokeGroupSpaceAccess,
        ),

        async function SpaceController_revokeGroupSpaceAccess(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSpaceController_revokeGroupSpaceAccess,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SpaceController>(
                    SpaceController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'revokeGroupSpaceAccess',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSlackController_get: Record<string, TsoaRoute.ParameterSchema> = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        search: { in: 'query', name: 'search', dataType: 'string' },
    };
    app.get(
        '/api/v1/slack/channels',
        ...fetchMiddlewares<RequestHandler>(SlackController),
        ...fetchMiddlewares<RequestHandler>(SlackController.prototype.get),

        async function SlackController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSlackController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SlackController>(
                    SlackController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSlackController_updateCustomSettings: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SlackAppCustomSettings',
        },
    };
    app.put(
        '/api/v1/slack/custom-settings',
        ...fetchMiddlewares<RequestHandler>(SlackController),
        ...fetchMiddlewares<RequestHandler>(
            SlackController.prototype.updateCustomSettings,
        ),

        async function SlackController_updateCustomSettings(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSlackController_updateCustomSettings,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<SlackController>(
                    SlackController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateCustomSettings',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsShareController_get: Record<string, TsoaRoute.ParameterSchema> = {
        nanoId: {
            in: 'path',
            name: 'nanoId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/share/:nanoId',
        ...fetchMiddlewares<RequestHandler>(ShareController),
        ...fetchMiddlewares<RequestHandler>(ShareController.prototype.get),

        async function ShareController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsShareController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ShareController>(
                    ShareController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsShareController_create: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateShareUrl',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/share',
        ...fetchMiddlewares<RequestHandler>(ShareController),
        ...fetchMiddlewares<RequestHandler>(ShareController.prototype.create),

        async function ShareController_create(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsShareController_create,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ShareController>(
                    ShareController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_getLogs: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/schedulers/:projectUuid/logs',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getLogs,
        ),

        async function SchedulerController_getLogs(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_getLogs,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getLogs',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_get: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        schedulerUuid: {
            in: 'path',
            name: 'schedulerUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(SchedulerController.prototype.get),

        async function SchedulerController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_patch: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        schedulerUuid: {
            in: 'path',
            name: 'schedulerUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: { in: 'body', name: 'body', required: true, dataType: 'any' },
    };
    app.patch(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.patch,
        ),

        async function SchedulerController_patch(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_patch,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'patch',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_patchEnabled: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        schedulerUuid: {
            in: 'path',
            name: 'schedulerUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                enabled: { dataType: 'boolean', required: true },
            },
        },
    };
    app.patch(
        '/api/v1/schedulers/:schedulerUuid/enabled',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.patchEnabled,
        ),

        async function SchedulerController_patchEnabled(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_patchEnabled,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'patchEnabled',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_delete: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        schedulerUuid: {
            in: 'path',
            name: 'schedulerUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.delete,
        ),

        async function SchedulerController_delete(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_delete,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_getJobs: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        schedulerUuid: {
            in: 'path',
            name: 'schedulerUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/schedulers/:schedulerUuid/jobs',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getJobs,
        ),

        async function SchedulerController_getJobs(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_getJobs,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getJobs',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_getSchedulerStatus: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        jobId: {
            in: 'path',
            name: 'jobId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/schedulers/job/:jobId/status',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getSchedulerStatus,
        ),

        async function SchedulerController_getSchedulerStatus(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_getSchedulerStatus,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSchedulerStatus',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSchedulerController_post: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: { in: 'body', name: 'body', required: true, dataType: 'any' },
    };
    app.post(
        '/api/v1/schedulers/send',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(SchedulerController.prototype.post),

        async function SchedulerController_post(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSchedulerController_post,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SchedulerController>(
                        SchedulerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'post',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsRunViewChartQueryController_postUnderlyingData: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'MetricQueryRequest',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        exploreId: {
            in: 'path',
            name: 'exploreId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/runUnderlyingDataQuery',
        ...fetchMiddlewares<RequestHandler>(RunViewChartQueryController),
        ...fetchMiddlewares<RequestHandler>(
            RunViewChartQueryController.prototype.postUnderlyingData,
        ),

        async function RunViewChartQueryController_postUnderlyingData(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsRunViewChartQueryController_postUnderlyingData,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<RunViewChartQueryController>(
                        RunViewChartQueryController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'postUnderlyingData',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsRunViewChartQueryController_runMetricQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'MetricQueryRequest',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        exploreId: {
            in: 'path',
            name: 'exploreId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/runQuery',
        ...fetchMiddlewares<RequestHandler>(RunViewChartQueryController),
        ...fetchMiddlewares<RequestHandler>(
            RunViewChartQueryController.prototype.runMetricQuery,
        ),

        async function RunViewChartQueryController_runMetricQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsRunViewChartQueryController_runMetricQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<RunViewChartQueryController>(
                        RunViewChartQueryController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runMetricQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_postChartResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: { invalidateCache: { dataType: 'boolean' } },
        },
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/results',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.postChartResults,
        ),

        async function SavedChartController_postChartResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_postChartResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'postChartResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_postDashboardTile: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                autoRefresh: { dataType: 'boolean' },
                granularity: { ref: 'DateGranularity' },
                dashboardUuid: { dataType: 'string', required: true },
                dashboardSorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                invalidateCache: { dataType: 'boolean' },
                dashboardFilters: { dataType: 'any', required: true },
            },
        },
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/chart-and-results',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.postDashboardTile,
        ),

        async function SavedChartController_postDashboardTile(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_postDashboardTile,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'postDashboardTile',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_getChartHistory: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/saved/:chartUuid/history',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.getChartHistory,
        ),

        async function SavedChartController_getChartHistory(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_getChartHistory,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartHistory',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_getChartVersion: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        versionUuid: {
            in: 'path',
            name: 'versionUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/saved/:chartUuid/version/:versionUuid',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.getChartVersion,
        ),

        async function SavedChartController_getChartVersion(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_getChartVersion,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartVersion',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_getChartVersionResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        versionUuid: {
            in: 'path',
            name: 'versionUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/version/:versionUuid/results',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.getChartVersionResults,
        ),

        async function SavedChartController_getChartVersionResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_getChartVersionResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartVersionResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_postChartVersionRollback: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        versionUuid: {
            in: 'path',
            name: 'versionUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/rollback/:versionUuid',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.postChartVersionRollback,
        ),

        async function SavedChartController_postChartVersionRollback(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_postChartVersionRollback,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'postChartVersionRollback',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_calculateTotalFromSavedChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                invalidateCache: { dataType: 'boolean' },
                dashboardFilters: { dataType: 'any' },
            },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/calculate-total',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.calculateTotalFromSavedChart,
        ),

        async function SavedChartController_calculateTotalFromSavedChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_calculateTotalFromSavedChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'calculateTotalFromSavedChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_promoteChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/saved/:chartUuid/promote',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.promoteChart,
        ),

        async function SavedChartController_promoteChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_promoteChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'promoteChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_promoteChartDiff: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/saved/:chartUuid/promoteDiff',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.promoteChartDiff,
        ),

        async function SavedChartController_promoteChartDiff(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_promoteChartDiff,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'promoteChartDiff',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSavedChartController_DownloadCsvFromSavedChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                csvLimit: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                onlyRaw: { dataType: 'boolean', required: true },
                tileUuid: { dataType: 'string' },
                dashboardFilters: { dataType: 'any', required: true },
            },
        },
    };
    app.post(
        '/api/v1/saved/:chartUuid/downloadCsv',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.DownloadCsvFromSavedChart,
        ),

        async function SavedChartController_DownloadCsvFromSavedChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSavedChartController_DownloadCsvFromSavedChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SavedChartController>(
                        SavedChartController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'DownloadCsvFromSavedChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getProject: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProject,
        ),

        async function ProjectController_getProject(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getProject,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getProject',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getChartsInProject: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/charts',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getChartsInProject,
        ),

        async function ProjectController_getChartsInProject(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getChartsInProject,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartsInProject',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getChartSummariesInProject: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        excludeChartsSavedInDashboard: {
            in: 'query',
            name: 'excludeChartsSavedInDashboard',
            dataType: 'boolean',
        },
    };
    app.get(
        '/api/v1/projects/:projectUuid/chart-summaries',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getChartSummariesInProject,
        ),

        async function ProjectController_getChartSummariesInProject(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getChartSummariesInProject,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartSummariesInProject',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getSpacesInProject: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/spaces',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getSpacesInProject,
        ),

        async function ProjectController_getSpacesInProject(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getSpacesInProject,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSpacesInProject',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getProjectAccessList: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/access',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProjectAccessList,
        ),

        async function ProjectController_getProjectAccessList(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getProjectAccessList,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getProjectAccessList',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getProjectMember: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/user/:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProjectMember,
        ),

        async function ProjectController_getProjectMember(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getProjectMember,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getProjectMember',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_grantProjectAccessToUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateProjectMember',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/access',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.grantProjectAccessToUser,
        ),

        async function ProjectController_grantProjectAccessToUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_grantProjectAccessToUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'grantProjectAccessToUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateProjectAccessForUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateProjectMember',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/access/:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateProjectAccessForUser,
        ),

        async function ProjectController_updateProjectAccessForUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateProjectAccessForUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateProjectAccessForUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_revokeProjectAccessForUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/access/:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.revokeProjectAccessForUser,
        ),

        async function ProjectController_revokeProjectAccessForUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_revokeProjectAccessForUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'revokeProjectAccessForUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getProjectGroupAccesses: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/groupAccesses',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProjectGroupAccesses,
        ),

        async function ProjectController_getProjectGroupAccesses(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getProjectGroupAccesses,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getProjectGroupAccesses',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_runSqlQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: { sql: { dataType: 'string', required: true } },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/sqlQuery',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.runSqlQuery,
        ),

        async function ProjectController_runSqlQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_runSqlQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runSqlQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_CalculateTotalFromQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CalculateTotalFromQuery',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/calculate-total',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.CalculateTotalFromQuery,
        ),

        async function ProjectController_CalculateTotalFromQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_CalculateTotalFromQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'CalculateTotalFromQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_GetDbtExposures: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dbt-exposures',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.GetDbtExposures,
        ),

        async function ProjectController_GetDbtExposures(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_GetDbtExposures,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'GetDbtExposures',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getUserWarehouseCredentialsPreference: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/user-credentials',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getUserWarehouseCredentialsPreference,
        ),

        async function ProjectController_getUserWarehouseCredentialsPreference(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getUserWarehouseCredentialsPreference,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getUserWarehouseCredentialsPreference',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateUserWarehouseCredentialsPreference: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        userWarehouseCredentialsUuid: {
            in: 'path',
            name: 'userWarehouseCredentialsUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/user-credentials/:userWarehouseCredentialsUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype
                .updateUserWarehouseCredentialsPreference,
        ),

        async function ProjectController_updateUserWarehouseCredentialsPreference(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateUserWarehouseCredentialsPreference,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateUserWarehouseCredentialsPreference',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getCustomMetrics: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/custom-metrics',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getCustomMetrics,
        ),

        async function ProjectController_getCustomMetrics(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getCustomMetrics,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getCustomMetrics',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateProjectMetadata: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateMetadata',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/metadata',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateProjectMetadata,
        ),

        async function ProjectController_updateProjectMetadata(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateProjectMetadata,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateProjectMetadata',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateProjectSemanticLayerConnection: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SemanticLayerConnectionUpdate',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/semantic-layer-connection',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateProjectSemanticLayerConnection,
        ),

        async function ProjectController_updateProjectSemanticLayerConnection(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateProjectSemanticLayerConnection,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateProjectSemanticLayerConnection',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_deleteProjectSemanticLayerConnection: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/semantic-layer-connection',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.deleteProjectSemanticLayerConnection,
        ),

        async function ProjectController_deleteProjectSemanticLayerConnection(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_deleteProjectSemanticLayerConnection,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteProjectSemanticLayerConnection',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getDashboards: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dashboards',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getDashboards,
        ),

        async function ProjectController_getDashboards(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getDashboards,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getDashboards',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_createDashboard: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'union',
            subSchemas: [
                { ref: 'DuplicateDashboardParams' },
                { ref: 'CreateDashboard' },
            ],
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        duplicateFrom: {
            in: 'query',
            name: 'duplicateFrom',
            dataType: 'string',
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/dashboards',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.createDashboard,
        ),

        async function ProjectController_createDashboard(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_createDashboard,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createDashboard',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateDashboards: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'UpdateMultipleDashboards' },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/dashboards',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateDashboards,
        ),

        async function ProjectController_updateDashboards(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateDashboards,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateDashboards',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_createPreview: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                copyContent: { dataType: 'boolean', required: true },
                name: { dataType: 'string', required: true },
            },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/createPreview',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.createPreview,
        ),

        async function ProjectController_createPreview(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_createPreview,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createPreview',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateSchedulerSettings: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateSchedulerSettings',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/schedulerSettings',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateSchedulerSettings,
        ),

        async function ProjectController_updateSchedulerSettings(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateSchedulerSettings,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateSchedulerSettings',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_createTag: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'Pick_Tag.name-or-color_',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/tags',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.createTag,
        ),

        async function ProjectController_createTag(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_createTag,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createTag',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_deleteTag: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        tagUuid: {
            in: 'path',
            name: 'tagUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/tags/:tagUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.deleteTag,
        ),

        async function ProjectController_deleteTag(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_deleteTag,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteTag',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 204,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_updateTag: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        tagUuid: {
            in: 'path',
            name: 'tagUuid',
            required: true,
            dataType: 'string',
        },
        body: { in: 'body', name: 'body', required: true, ref: 'DbTagUpdate' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/tags/:tagUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateTag,
        ),

        async function ProjectController_updateTag(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_updateTag,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateTag',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getTags: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/tags',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getTags,
        ),

        async function ProjectController_getTags(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getTags,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getTags',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getChartsAsCode: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        ids: {
            in: 'query',
            name: 'ids',
            dataType: 'array',
            array: { dataType: 'string' },
        },
        offset: { in: 'query', name: 'offset', dataType: 'double' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/charts/code',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getChartsAsCode,
        ),

        async function ProjectController_getChartsAsCode(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getChartsAsCode,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getChartsAsCode',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_getDashboardsAsCode: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        ids: {
            in: 'query',
            name: 'ids',
            dataType: 'array',
            array: { dataType: 'string' },
        },
        offset: { in: 'query', name: 'offset', dataType: 'double' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dashboards/code',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getDashboardsAsCode,
        ),

        async function ProjectController_getDashboardsAsCode(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_getDashboardsAsCode,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getDashboardsAsCode',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_upsertChartAsCode: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        slug: { in: 'path', name: 'slug', required: true, dataType: 'string' },
        chart: {
            in: 'body',
            name: 'chart',
            required: true,
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Omit_ChartAsCode.metricQuery-or-chartConfig-or-description_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        description: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                        },
                        metricQuery: { dataType: 'any', required: true },
                        chartConfig: { dataType: 'any', required: true },
                    },
                },
            ],
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/charts/:slug/code',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.upsertChartAsCode,
        ),

        async function ProjectController_upsertChartAsCode(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_upsertChartAsCode,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'upsertChartAsCode',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProjectController_upsertDashboardAsCode: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        slug: { in: 'path', name: 'slug', required: true, dataType: 'string' },
        dashboard: {
            in: 'body',
            name: 'dashboard',
            required: true,
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Omit_DashboardAsCode.filters-or-tiles-or-description_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        description: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'enum', enums: [null] },
                            ],
                        },
                        tiles: { dataType: 'any', required: true },
                        filters: { dataType: 'any', required: true },
                    },
                },
            ],
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/dashboards/:slug/code',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.upsertDashboardAsCode,
        ),

        async function ProjectController_upsertDashboardAsCode(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsProjectController_upsertDashboardAsCode,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ProjectController>(
                    ProjectController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'upsertDashboardAsCode',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPinningController_get: Record<string, TsoaRoute.ParameterSchema> =
        {
            projectUuid: {
                in: 'path',
                name: 'projectUuid',
                required: true,
                dataType: 'string',
            },
            pinnedListUuid: {
                in: 'path',
                name: 'pinnedListUuid',
                required: true,
                dataType: 'string',
            },
            req: {
                in: 'request',
                name: 'req',
                required: true,
                dataType: 'object',
            },
        };
    app.get(
        '/api/v1/projects/:projectUuid/pinned-lists/:pinnedListUuid/items',
        ...fetchMiddlewares<RequestHandler>(PinningController),
        ...fetchMiddlewares<RequestHandler>(PinningController.prototype.get),

        async function PinningController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsPinningController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<PinningController>(
                    PinningController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPinningController_post: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        pinnedListUuid: {
            in: 'path',
            name: 'pinnedListUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'array',
            array: { dataType: 'refAlias', ref: 'UpdatePinnedItemOrder' },
        },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/pinned-lists/:pinnedListUuid/items/order',
        ...fetchMiddlewares<RequestHandler>(PinningController),
        ...fetchMiddlewares<RequestHandler>(PinningController.prototype.post),

        async function PinningController_post(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsPinningController_post,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<PinningController>(
                    PinningController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'post',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganization,
        ),

        async function OrganizationController_getOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_getOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_createOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'CreateOrganization',
        },
    };
    app.put(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.createOrganization,
        ),

        async function OrganizationController_createOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_createOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_updateOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateOrganization',
        },
    };
    app.patch(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.updateOrganization,
        ),

        async function OrganizationController_updateOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_updateOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_deleteOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        organizationUuid: {
            in: 'path',
            name: 'organizationUuid',
            required: true,
            dataType: 'string',
        },
    };
    app.delete(
        '/api/v1/org/:organizationUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.deleteOrganization,
        ),

        async function OrganizationController_deleteOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_deleteOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getProjects: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/org/projects',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getProjects,
        ),

        async function OrganizationController_getProjects(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_getProjects,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getProjects',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getOrganizationMembers: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        includeGroups: {
            in: 'query',
            name: 'includeGroups',
            dataType: 'double',
        },
        pageSize: { in: 'query', name: 'pageSize', dataType: 'double' },
        page: { in: 'query', name: 'page', dataType: 'double' },
        searchQuery: { in: 'query', name: 'searchQuery', dataType: 'string' },
        projectUuid: { in: 'query', name: 'projectUuid', dataType: 'string' },
    };
    app.get(
        '/api/v1/org/users',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationMembers,
        ),

        async function OrganizationController_getOrganizationMembers(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_getOrganizationMembers,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getOrganizationMembers',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getOrganizationMemberByUuid: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        userUuid: { in: 'path', name: 'userUuid', required: true, ref: 'UUID' },
    };
    app.get(
        '/api/v1/org/users/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationMemberByUuid,
        ),

        async function OrganizationController_getOrganizationMemberByUuid(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_getOrganizationMemberByUuid,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getOrganizationMemberByUuid',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_updateOrganizationMember: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'OrganizationMemberProfileUpdate',
        },
    };
    app.patch(
        '/api/v1/org/users/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.updateOrganizationMember,
        ),

        async function OrganizationController_updateOrganizationMember(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_updateOrganizationMember,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateOrganizationMember',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_deleteUser: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
    };
    app.delete(
        '/api/v1/org/user/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.deleteUser,
        ),

        async function OrganizationController_deleteUser(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_deleteUser,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getOrganizationAllowedEmailDomains: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/org/allowedEmailDomains',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationAllowedEmailDomains,
        ),

        async function OrganizationController_getOrganizationAllowedEmailDomains(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_getOrganizationAllowedEmailDomains,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getOrganizationAllowedEmailDomains',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_updateOrganizationAllowedEmailDomains: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateAllowedEmailDomains',
        },
    };
    app.patch(
        '/api/v1/org/allowedEmailDomains',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype
                .updateOrganizationAllowedEmailDomains,
        ),

        async function OrganizationController_updateOrganizationAllowedEmailDomains(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_updateOrganizationAllowedEmailDomains,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateOrganizationAllowedEmailDomains',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_createGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: { in: 'body', name: 'body', required: true, ref: 'CreateGroup' },
    };
    app.post(
        '/api/v1/org/groups',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.createGroup,
        ),

        async function OrganizationController_createGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_createGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_listGroupsInOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        page: { in: 'query', name: 'page', dataType: 'double' },
        pageSize: { in: 'query', name: 'pageSize', dataType: 'double' },
        includeMembers: {
            in: 'query',
            name: 'includeMembers',
            dataType: 'double',
        },
        searchQuery: { in: 'query', name: 'searchQuery', dataType: 'string' },
    };
    app.get(
        '/api/v1/org/groups',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.listGroupsInOrganization,
        ),

        async function OrganizationController_listGroupsInOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsOrganizationController_listGroupsInOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<OrganizationController>(
                        OrganizationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'listGroupsInOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNotificationsController_getNotifications: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        type: {
            in: 'query',
            name: 'type',
            required: true,
            ref: 'ApiNotificationResourceType',
        },
    };
    app.get(
        '/api/v1/notifications',
        ...fetchMiddlewares<RequestHandler>(NotificationsController),
        ...fetchMiddlewares<RequestHandler>(
            NotificationsController.prototype.getNotifications,
        ),

        async function NotificationsController_getNotifications(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsNotificationsController_getNotifications,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<NotificationsController>(
                        NotificationsController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getNotifications',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNotificationsController_updateNotification: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        notificationId: {
            in: 'path',
            name: 'notificationId',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'ApiNotificationUpdateParams',
        },
    };
    app.patch(
        '/api/v1/notifications/:notificationId',
        ...fetchMiddlewares<RequestHandler>(NotificationsController),
        ...fetchMiddlewares<RequestHandler>(
            NotificationsController.prototype.updateNotification,
        ),

        async function NotificationsController_updateNotification(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsNotificationsController_updateNotification,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<NotificationsController>(
                        NotificationsController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateNotification',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMetricsExplorerController_runMetricExplorerQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        explore: {
            in: 'path',
            name: 'explore',
            required: true,
            dataType: 'string',
        },
        metric: {
            in: 'path',
            name: 'metric',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        startDate: {
            in: 'query',
            name: 'startDate',
            required: true,
            dataType: 'string',
        },
        endDate: {
            in: 'query',
            name: 'endDate',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                filter: { ref: 'FilterRule' },
                query: { ref: 'MetricExplorerQuery', required: true },
                timeDimensionOverride: { ref: 'TimeDimensionConfig' },
            },
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/metricsExplorer/:explore/:metric/runMetricExplorerQuery',
        ...fetchMiddlewares<RequestHandler>(MetricsExplorerController),
        ...fetchMiddlewares<RequestHandler>(
            MetricsExplorerController.prototype.runMetricExplorerQuery,
        ),

        async function MetricsExplorerController_runMetricExplorerQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMetricsExplorerController_runMetricExplorerQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<MetricsExplorerController>(
                        MetricsExplorerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runMetricExplorerQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMetricsExplorerController_runMetricTotal: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        explore: {
            in: 'path',
            name: 'explore',
            required: true,
            dataType: 'string',
        },
        metric: {
            in: 'path',
            name: 'metric',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        timeFrame: {
            in: 'query',
            name: 'timeFrame',
            required: true,
            ref: 'TimeFrames',
        },
        startDate: {
            in: 'query',
            name: 'startDate',
            required: true,
            dataType: 'string',
        },
        endDate: {
            in: 'query',
            name: 'endDate',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                comparisonType: { ref: 'MetricTotalComparisonType' },
            },
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/metricsExplorer/:explore/:metric/runMetricTotal',
        ...fetchMiddlewares<RequestHandler>(MetricsExplorerController),
        ...fetchMiddlewares<RequestHandler>(
            MetricsExplorerController.prototype.runMetricTotal,
        ),

        async function MetricsExplorerController_runMetricTotal(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMetricsExplorerController_runMetricTotal,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<MetricsExplorerController>(
                        MetricsExplorerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runMetricTotal',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_getGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        includeMembers: {
            in: 'query',
            name: 'includeMembers',
            dataType: 'double',
        },
        offset: { in: 'query', name: 'offset', dataType: 'double' },
    };
    app.get(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.getGroup,
        ),

        async function GroupsController_getGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_getGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_deleteGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.deleteGroup,
        ),

        async function GroupsController_deleteGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_deleteGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_addUserToGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.put(
        '/api/v1/groups/:groupUuid/members/:userUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.addUserToGroup,
        ),

        async function GroupsController_addUserToGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_addUserToGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'addUserToGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_removeUserFromGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        userUuid: {
            in: 'path',
            name: 'userUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/groups/:groupUuid/members/:userUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.removeUserFromGroup,
        ),

        async function GroupsController_removeUserFromGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_removeUserFromGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'removeUserFromGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_getGroupMembers: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/groups/:groupUuid/members',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.getGroupMembers,
        ),

        async function GroupsController_getGroupMembers(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_getGroupMembers,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getGroupMembers',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_updateGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UpdateGroupWithMembers',
        },
    };
    app.patch(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.updateGroup,
        ),

        async function GroupsController_updateGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_updateGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_addProjectAccessToGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        projectGroupAccess: {
            in: 'body',
            name: 'projectGroupAccess',
            required: true,
            ref: 'Pick_CreateDBProjectGroupAccess.role_',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/groups/:groupUuid/projects/:projectUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.addProjectAccessToGroup,
        ),

        async function GroupsController_addProjectAccessToGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_addProjectAccessToGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'addProjectAccessToGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_updateProjectAccessForGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        projectGroupAccess: {
            in: 'body',
            name: 'projectGroupAccess',
            required: true,
            ref: 'UpdateDBProjectGroupAccess',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/groups/:groupUuid/projects/:projectUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.updateProjectAccessForGroup,
        ),

        async function GroupsController_updateProjectAccessForGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_updateProjectAccessForGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateProjectAccessForGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGroupsController_removeProjectAccessFromGroup: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        groupUuid: {
            in: 'path',
            name: 'groupUuid',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/groups/:groupUuid/projects/:projectUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.removeProjectAccessFromGroup,
        ),

        async function GroupsController_removeProjectAccessFromGroup(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGroupsController_removeProjectAccessFromGroup,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<GroupsController>(
                    GroupsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'removeProjectAccessFromGroup',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGoogleDriveController_get: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/gdrive/get-access-token',
        ...fetchMiddlewares<RequestHandler>(GoogleDriveController),
        ...fetchMiddlewares<RequestHandler>(
            GoogleDriveController.prototype.get,
        ),

        async function GoogleDriveController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGoogleDriveController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GoogleDriveController>(
                        GoogleDriveController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGoogleDriveController_post: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'UploadMetricGsheet',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/gdrive/upload-gsheet',
        ...fetchMiddlewares<RequestHandler>(GoogleDriveController),
        ...fetchMiddlewares<RequestHandler>(
            GoogleDriveController.prototype.post,
        ),

        async function GoogleDriveController_post(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGoogleDriveController_post,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GoogleDriveController>(
                        GoogleDriveController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'post',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGithubInstallController_installGithubAppForOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/github/install',
        ...fetchMiddlewares<RequestHandler>(GithubInstallController),
        ...fetchMiddlewares<RequestHandler>(
            GithubInstallController.prototype.installGithubAppForOrganization,
        ),

        async function GithubInstallController_installGithubAppForOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGithubInstallController_installGithubAppForOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GithubInstallController>(
                        GithubInstallController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'installGithubAppForOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 302,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGithubInstallController_githubOauthCallback: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        code: { in: 'query', name: 'code', dataType: 'string' },
        state: { in: 'query', name: 'state', dataType: 'string' },
        installation_id: {
            in: 'query',
            name: 'installation_id',
            dataType: 'string',
        },
        setup_action: { in: 'query', name: 'setup_action', dataType: 'string' },
    };
    app.get(
        '/api/v1/github/oauth/callback',
        ...fetchMiddlewares<RequestHandler>(GithubInstallController),
        ...fetchMiddlewares<RequestHandler>(
            GithubInstallController.prototype.githubOauthCallback,
        ),

        async function GithubInstallController_githubOauthCallback(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGithubInstallController_githubOauthCallback,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GithubInstallController>(
                        GithubInstallController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'githubOauthCallback',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGithubInstallController_uninstallGithubAppForOrganization: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/github/uninstall',
        ...fetchMiddlewares<RequestHandler>(GithubInstallController),
        ...fetchMiddlewares<RequestHandler>(
            GithubInstallController.prototype.uninstallGithubAppForOrganization,
        ),

        async function GithubInstallController_uninstallGithubAppForOrganization(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGithubInstallController_uninstallGithubAppForOrganization,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GithubInstallController>(
                        GithubInstallController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'uninstallGithubAppForOrganization',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGithubInstallController_getGithubListRepositories: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/github/repos/list',
        ...fetchMiddlewares<RequestHandler>(GithubInstallController),
        ...fetchMiddlewares<RequestHandler>(
            GithubInstallController.prototype.getGithubListRepositories,
        ),

        async function GithubInstallController_getGithubListRepositories(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGithubInstallController_getGithubListRepositories,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GithubInstallController>(
                        GithubInstallController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getGithubListRepositories',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGitIntegrationController_GetConfiguration: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/git-integration',
        ...fetchMiddlewares<RequestHandler>(GitIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            GitIntegrationController.prototype.GetConfiguration,
        ),

        async function GitIntegrationController_GetConfiguration(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGitIntegrationController_GetConfiguration,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GitIntegrationController>(
                        GitIntegrationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'GetConfiguration',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGitIntegrationController_CreatePullRequestForChartFields: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        chartUuid: {
            in: 'path',
            name: 'chartUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/git-integration/pull-requests/chart/:chartUuid/fields',
        ...fetchMiddlewares<RequestHandler>(GitIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            GitIntegrationController.prototype.CreatePullRequestForChartFields,
        ),

        async function GitIntegrationController_CreatePullRequestForChartFields(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGitIntegrationController_CreatePullRequestForChartFields,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GitIntegrationController>(
                        GitIntegrationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'CreatePullRequestForChartFields',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsGitIntegrationController_CreatePullRequestForCustomMetrics: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                quoteChar: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['"'] },
                        { dataType: 'enum', enums: ["'"] },
                    ],
                    required: true,
                },
                customMetrics: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
            },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/git-integration/pull-requests/custom-metrics',
        ...fetchMiddlewares<RequestHandler>(GitIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            GitIntegrationController.prototype
                .CreatePullRequestForCustomMetrics,
        ),

        async function GitIntegrationController_CreatePullRequestForCustomMetrics(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsGitIntegrationController_CreatePullRequestForCustomMetrics,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<GitIntegrationController>(
                        GitIntegrationController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'CreatePullRequestForCustomMetrics',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExploreController_SetExplores: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'array',
            array: { dataType: 'any' },
        },
    };
    app.put(
        '/api/v1/projects/:projectUuid/explores',
        ...fetchMiddlewares<RequestHandler>(ExploreController),
        ...fetchMiddlewares<RequestHandler>(
            ExploreController.prototype.SetExplores,
        ),

        async function ExploreController_SetExplores(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExploreController_SetExplores,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ExploreController>(
                    ExploreController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'SetExplores',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExploreController_GetExplores: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/explores',
        ...fetchMiddlewares<RequestHandler>(ExploreController),
        ...fetchMiddlewares<RequestHandler>(
            ExploreController.prototype.GetExplores,
        ),

        async function ExploreController_GetExplores(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExploreController_GetExplores,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ExploreController>(
                    ExploreController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'GetExplores',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExploreController_GetExplore: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        exploreId: {
            in: 'path',
            name: 'exploreId',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/explores/:exploreId',
        ...fetchMiddlewares<RequestHandler>(ExploreController),
        ...fetchMiddlewares<RequestHandler>(
            ExploreController.prototype.GetExplore,
        ),

        async function ExploreController_GetExplore(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExploreController_GetExplore,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ExploreController>(
                    ExploreController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'GetExplore',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExploreController_CompileQuery: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        exploreId: {
            in: 'path',
            name: 'exploreId',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: { in: 'body', name: 'body', required: true, ref: 'MetricQuery' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/compileQuery',
        ...fetchMiddlewares<RequestHandler>(ExploreController),
        ...fetchMiddlewares<RequestHandler>(
            ExploreController.prototype.CompileQuery,
        ),

        async function ExploreController_CompileQuery(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExploreController_CompileQuery,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ExploreController>(
                    ExploreController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'CompileQuery',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExploreController_DownloadCsvFromExplore: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        exploreId: {
            in: 'path',
            name: 'exploreId',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'intersection',
            subSchemas: [
                { ref: 'MetricQuery' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        pivotColumns: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                        },
                        chartName: { dataType: 'string' },
                        hiddenFields: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                        },
                        columnOrder: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                        customLabels: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {},
                            additionalProperties: { dataType: 'string' },
                        },
                        showTableNames: { dataType: 'boolean', required: true },
                        csvLimit: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'double' },
                                { dataType: 'enum', enums: [null] },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                        onlyRaw: { dataType: 'boolean', required: true },
                    },
                },
            ],
        },
    };
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/downloadCsv',
        ...fetchMiddlewares<RequestHandler>(ExploreController),
        ...fetchMiddlewares<RequestHandler>(
            ExploreController.prototype.DownloadCsvFromExplore,
        ),

        async function ExploreController_DownloadCsvFromExplore(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExploreController_DownloadCsvFromExplore,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ExploreController>(
                    ExploreController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'DownloadCsvFromExplore',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsDashboardController_promoteDashboard: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/dashboards/:dashboardUuid/promote',
        ...fetchMiddlewares<RequestHandler>(DashboardController),
        ...fetchMiddlewares<RequestHandler>(
            DashboardController.prototype.promoteDashboard,
        ),

        async function DashboardController_promoteDashboard(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsDashboardController_promoteDashboard,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<DashboardController>(
                        DashboardController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'promoteDashboard',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsDashboardController_promoteDashboardDiff: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/dashboards/:dashboardUuid/promoteDiff',
        ...fetchMiddlewares<RequestHandler>(DashboardController),
        ...fetchMiddlewares<RequestHandler>(
            DashboardController.prototype.promoteDashboardDiff,
        ),

        async function DashboardController_promoteDashboardDiff(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsDashboardController_promoteDashboardDiff,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<DashboardController>(
                        DashboardController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'promoteDashboardDiff',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCsvController_get: Record<string, TsoaRoute.ParameterSchema> = {
        jobId: {
            in: 'path',
            name: 'jobId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/csv/:jobId',
        ...fetchMiddlewares<RequestHandler>(CsvController),
        ...fetchMiddlewares<RequestHandler>(CsvController.prototype.get),

        async function CsvController_get(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCsvController_get,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CsvController>(
                    CsvController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCommentsController_createComment: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        dashboardTileUuid: {
            in: 'path',
            name: 'dashboardTileUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'Pick_Comment.text-or-replyTo-or-mentions-or-textHtml_',
        },
    };
    app.post(
        '/api/v1/comments/dashboards/:dashboardUuid/:dashboardTileUuid',
        ...fetchMiddlewares<RequestHandler>(CommentsController),
        ...fetchMiddlewares<RequestHandler>(
            CommentsController.prototype.createComment,
        ),

        async function CommentsController_createComment(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCommentsController_createComment,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CommentsController>(
                    CommentsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createComment',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCommentsController_getComments: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/comments/dashboards/:dashboardUuid',
        ...fetchMiddlewares<RequestHandler>(CommentsController),
        ...fetchMiddlewares<RequestHandler>(
            CommentsController.prototype.getComments,
        ),

        async function CommentsController_getComments(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCommentsController_getComments,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CommentsController>(
                    CommentsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getComments',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCommentsController_resolveComment: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        commentId: {
            in: 'path',
            name: 'commentId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/comments/dashboards/:dashboardUuid/:commentId',
        ...fetchMiddlewares<RequestHandler>(CommentsController),
        ...fetchMiddlewares<RequestHandler>(
            CommentsController.prototype.resolveComment,
        ),

        async function CommentsController_resolveComment(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCommentsController_resolveComment,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CommentsController>(
                    CommentsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'resolveComment',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCommentsController_deleteComment: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        dashboardUuid: {
            in: 'path',
            name: 'dashboardUuid',
            required: true,
            dataType: 'string',
        },
        commentId: {
            in: 'path',
            name: 'commentId',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/comments/dashboards/:dashboardUuid/:commentId',
        ...fetchMiddlewares<RequestHandler>(CommentsController),
        ...fetchMiddlewares<RequestHandler>(
            CommentsController.prototype.deleteComment,
        ),

        async function CommentsController_deleteComment(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCommentsController_deleteComment,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CommentsController>(
                    CommentsController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteComment',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getCatalog: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        search: { in: 'query', name: 'search', dataType: 'string' },
        type: { in: 'query', name: 'type', ref: 'CatalogType' },
        filter: { in: 'query', name: 'filter', ref: 'CatalogFilter' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getCatalog,
        ),

        async function CatalogController_getCatalog(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getCatalog,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getCatalog',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getMetadata: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        table: {
            in: 'path',
            name: 'table',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/:table/metadata',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getMetadata,
        ),

        async function CatalogController_getMetadata(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getMetadata,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getMetadata',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getAnalytics: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        table: {
            in: 'path',
            name: 'table',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/:table/analytics',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getAnalytics,
        ),

        async function CatalogController_getAnalytics(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getAnalytics,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getAnalytics',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getAnalyticsField: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        table: {
            in: 'path',
            name: 'table',
            required: true,
            dataType: 'string',
        },
        field: {
            in: 'path',
            name: 'field',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/:table/analytics/:field',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getAnalyticsField,
        ),

        async function CatalogController_getAnalyticsField(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getAnalyticsField,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getAnalyticsField',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getMetricsCatalog: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        search: { in: 'query', name: 'search', dataType: 'string' },
        page: { in: 'query', name: 'page', dataType: 'double' },
        pageSize: { in: 'query', name: 'pageSize', dataType: 'double' },
        sort: { in: 'query', name: 'sort', dataType: 'string' },
        order: { in: 'query', name: 'order', ref: 'ApiSortDirection' },
        categories: {
            in: 'query',
            name: 'categories',
            dataType: 'array',
            array: { dataType: 'string' },
        },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getMetricsCatalog,
        ),

        async function CatalogController_getMetricsCatalog(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getMetricsCatalog,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getMetricsCatalog',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getMetric: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        tableName: {
            in: 'path',
            name: 'tableName',
            required: true,
            dataType: 'string',
        },
        metricName: {
            in: 'path',
            name: 'metricName',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics/:tableName/:metricName',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getMetric,
        ),

        async function CatalogController_getMetric(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getMetric,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getMetric',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getMetricsWithTimeDimensions: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics-with-time-dimensions',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getMetricsWithTimeDimensions,
        ),

        async function CatalogController_getMetricsWithTimeDimensions(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getMetricsWithTimeDimensions,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getMetricsWithTimeDimensions',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getSegmentDimensions: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        tableName: {
            in: 'path',
            name: 'tableName',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/:tableName/segment-dimensions',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getSegmentDimensions,
        ),

        async function CatalogController_getSegmentDimensions(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getSegmentDimensions,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSegmentDimensions',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_addCategoryToCatalogItem: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        catalogSearchUuid: {
            in: 'path',
            name: 'catalogSearchUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                tagUuid: { dataType: 'string', required: true },
            },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/dataCatalog/:catalogSearchUuid/categories',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.addCategoryToCatalogItem,
        ),

        async function CatalogController_addCategoryToCatalogItem(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_addCategoryToCatalogItem,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'addCategoryToCatalogItem',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_removeCategoryFromCatalogItem: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        catalogSearchUuid: {
            in: 'path',
            name: 'catalogSearchUuid',
            required: true,
            dataType: 'string',
        },
        tagUuid: {
            in: 'path',
            name: 'tagUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/dataCatalog/:catalogSearchUuid/categories/:tagUuid',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.removeCategoryFromCatalogItem,
        ),

        async function CatalogController_removeCategoryFromCatalogItem(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_removeCategoryFromCatalogItem,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'removeCategoryFromCatalogItem',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_updateCatalogItemIcon: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        catalogSearchUuid: {
            in: 'path',
            name: 'catalogSearchUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                icon: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'CatalogItemIcon' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.patch(
        '/api/v1/projects/:projectUuid/dataCatalog/:catalogSearchUuid/icon',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.updateCatalogItemIcon,
        ),

        async function CatalogController_updateCatalogItemIcon(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_updateCatalogItemIcon,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateCatalogItemIcon',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_getMetricsTree: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        metricUuids: {
            in: 'query',
            name: 'metricUuids',
            required: true,
            dataType: 'array',
            array: { dataType: 'string' },
        },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics/tree',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.getMetricsTree,
        ),

        async function CatalogController_getMetricsTree(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_getMetricsTree,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getMetricsTree',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_createMetricsTreeEdge: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'ApiMetricsTreeEdgePayload',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics/tree/edges',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.createMetricsTreeEdge,
        ),

        async function CatalogController_createMetricsTreeEdge(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_createMetricsTreeEdge,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createMetricsTreeEdge',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_deleteMetricsTreeEdge: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        sourceCatalogSearchUuid: {
            in: 'path',
            name: 'sourceCatalogSearchUuid',
            required: true,
            dataType: 'string',
        },
        targetCatalogSearchUuid: {
            in: 'path',
            name: 'targetCatalogSearchUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics/tree/edges/:sourceCatalogSearchUuid/:targetCatalogSearchUuid',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.deleteMetricsTreeEdge,
        ),

        async function CatalogController_deleteMetricsTreeEdge(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_deleteMetricsTreeEdge,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteMetricsTreeEdge',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCatalogController_hasMetricsInCatalog: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v1/projects/:projectUuid/dataCatalog/metrics/has',
        ...fetchMiddlewares<RequestHandler>(CatalogController),
        ...fetchMiddlewares<RequestHandler>(
            CatalogController.prototype.hasMetricsInCatalog,
        ),

        async function CatalogController_hasMetricsInCatalog(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsCatalogController_hasMetricsInCatalog,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<CatalogController>(
                    CatalogController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'hasMetricsInCatalog',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getSemanticLayerInfo: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
    };
    app.get(
        '/api/v2/projects/:projectUuid/semantic-layer',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.getSemanticLayerInfo,
        ),

        async function SemanticLayerController_getSemanticLayerInfo(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getSemanticLayerInfo,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSemanticLayerInfo',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getViews: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
    };
    app.get(
        '/api/v2/projects/:projectUuid/semantic-layer/views',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.getViews,
        ),

        async function SemanticLayerController_getViews(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getViews,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getViews',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_querySemanticLayerFields: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        view: { in: 'path', name: 'view', required: true, dataType: 'string' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'Pick_SemanticLayerQuery.dimensions-or-timeDimensions-or-metrics_',
        },
    };
    app.post(
        '/api/v2/projects/:projectUuid/semantic-layer/views/:view/query-fields',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.querySemanticLayerFields,
        ),

        async function SemanticLayerController_querySemanticLayerFields(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_querySemanticLayerFields,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'querySemanticLayerFields',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_runSemanticLayerResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SemanticLayerQuery',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.post(
        '/api/v2/projects/:projectUuid/semantic-layer/run',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.runSemanticLayerResults,
        ),

        async function SemanticLayerController_runSemanticLayerResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_runSemanticLayerResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'runSemanticLayerResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getSemanticLayerResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        fileId: {
            in: 'path',
            name: 'fileId',
            required: true,
            dataType: 'string',
        },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.get(
        '/api/v2/projects/:projectUuid/semantic-layer/results/:fileId',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.getSemanticLayerResults,
        ),

        async function SemanticLayerController_getSemanticLayerResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getSemanticLayerResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSemanticLayerResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getSql: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SemanticLayerQuery',
        },
    };
    app.post(
        '/api/v2/projects/:projectUuid/semantic-layer/sql',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.getSql,
        ),

        async function SemanticLayerController_getSql(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getSql,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSql',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_createSemanticViewerChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SemanticViewerChartCreate',
        },
    };
    app.post(
        '/api/v2/projects/:projectUuid/semantic-layer/saved',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.createSemanticViewerChart,
        ),

        async function SemanticLayerController_createSemanticViewerChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_createSemanticViewerChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'createSemanticViewerChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getSavedSemanticViewerChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        slug: { in: 'query', name: 'slug', dataType: 'string' },
        uuid: { in: 'query', name: 'uuid', dataType: 'string' },
    };
    app.get(
        '/api/v2/projects/:projectUuid/semantic-layer/saved',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.getSavedSemanticViewerChart,
        ),

        async function SemanticLayerController_getSavedSemanticViewerChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getSavedSemanticViewerChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSemanticViewerChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_getSavedSemanticViewerChartAndResults: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        slug: { in: 'query', name: 'slug', dataType: 'string' },
        uuid: { in: 'query', name: 'uuid', dataType: 'string' },
    };
    app.get(
        '/api/v2/projects/:projectUuid/semantic-layer/saved/results-job',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype
                .getSavedSemanticViewerChartAndResults,
        ),

        async function SemanticLayerController_getSavedSemanticViewerChartAndResults(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_getSavedSemanticViewerChartAndResults,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getSavedSemanticViewerChartAndResults',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_updateSavedSemanticViewerChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        body: {
            in: 'body',
            name: 'body',
            required: true,
            ref: 'SemanticViewerChartUpdate',
        },
    };
    app.patch(
        '/api/v2/projects/:projectUuid/semantic-layer/saved/:uuid',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.updateSavedSemanticViewerChart,
        ),

        async function SemanticLayerController_updateSavedSemanticViewerChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_updateSavedSemanticViewerChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'updateSavedSemanticViewerChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSemanticLayerController_deleteSavedSemanticViewerChart: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        projectUuid: {
            in: 'path',
            name: 'projectUuid',
            required: true,
            dataType: 'string',
        },
        uuid: { in: 'path', name: 'uuid', required: true, dataType: 'string' },
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    };
    app.delete(
        '/api/v2/projects/:projectUuid/semantic-layer/saved/:uuid',
        ...fetchMiddlewares<RequestHandler>(SemanticLayerController),
        ...fetchMiddlewares<RequestHandler>(
            SemanticLayerController.prototype.deleteSavedSemanticViewerChart,
        ),

        async function SemanticLayerController_deleteSavedSemanticViewerChart(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSemanticLayerController_deleteSavedSemanticViewerChart,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<SemanticLayerController>(
                        SemanticLayerController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'deleteSavedSemanticViewerChart',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsFeatureFlagController_getFeatureFlag: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        featureFlagId: {
            in: 'path',
            name: 'featureFlagId',
            required: true,
            dataType: 'string',
        },
    };
    app.get(
        '/api/v2/feature-flag/:featureFlagId',
        ...fetchMiddlewares<RequestHandler>(FeatureFlagController),
        ...fetchMiddlewares<RequestHandler>(
            FeatureFlagController.prototype.getFeatureFlag,
        ),

        async function FeatureFlagController_getFeatureFlag(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsFeatureFlagController_getFeatureFlag,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any =
                    await container.get<FeatureFlagController>(
                        FeatureFlagController,
                    );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'getFeatureFlag',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsContentController_listContent: Record<
        string,
        TsoaRoute.ParameterSchema
    > = {
        req: { in: 'request', name: 'req', required: true, dataType: 'object' },
        projectUuids: {
            in: 'query',
            name: 'projectUuids',
            dataType: 'array',
            array: { dataType: 'string' },
        },
        spaceUuids: {
            in: 'query',
            name: 'spaceUuids',
            dataType: 'array',
            array: { dataType: 'string' },
        },
        contentTypes: {
            in: 'query',
            name: 'contentTypes',
            dataType: 'array',
            array: { dataType: 'refEnum', ref: 'ContentType' },
        },
        pageSize: { in: 'query', name: 'pageSize', dataType: 'double' },
        page: { in: 'query', name: 'page', dataType: 'double' },
        search: { in: 'query', name: 'search', dataType: 'string' },
        sortBy: { in: 'query', name: 'sortBy', ref: 'ContentSortByColumns' },
        sortDirection: {
            in: 'query',
            name: 'sortDirection',
            dataType: 'union',
            subSchemas: [
                { dataType: 'enum', enums: ['asc'] },
                { dataType: 'enum', enums: ['desc'] },
            ],
        },
    };
    app.get(
        '/api/v2/content',
        ...fetchMiddlewares<RequestHandler>(ContentController),
        ...fetchMiddlewares<RequestHandler>(
            ContentController.prototype.listContent,
        ),

        async function ContentController_listContent(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsContentController_listContent,
                    request,
                    response,
                });

                const container: IocContainer =
                    typeof iocContainer === 'function'
                        ? (iocContainer as IocContainerFactory)(request)
                        : iocContainer;

                const controller: any = await container.get<ContentController>(
                    ContentController,
                );
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }

                await templateService.apiHandler({
                    methodName: 'listContent',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 200,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
