/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BootcampBrandController } from './../controllers/BootcampBrandController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BootcampController } from './../controllers/BootcampController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CategoryController } from './../controllers/CategoryController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EduCompanyController } from './../controllers/EduCompanyController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TagController } from './../controllers/TagController';
import { iocContainer } from './../ioc/iocContainer';
import { IocContainer, IocContainerFactory } from '@tsoa/runtime';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "BootcampBrand": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "eduCompany": {"ref":"EduCompany","required":true},
            "bootcamps": {"dataType":"array","array":{"dataType":"refObject","ref":"Bootcamp"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EduCompany": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "bootcampBrands": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampBrand"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Bootcamp": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "bootcampBrand": {"ref":"BootcampBrand","required":true},
            "bootcampSecondCategoryMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampSecondCategoryMap"},"required":true},
            "bootcampDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampDetail"},"required":true},
            "reviews": {"dataType":"array","array":{"dataType":"refObject","ref":"Review"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecondCategory": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "firstCategory": {"ref":"FirstCategory","required":true},
            "bootcampSecondCategoryMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampSecondCategoryMap"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FirstCategory": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "secondCategories": {"dataType":"array","array":{"dataType":"refObject","ref":"SecondCategory"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BootcampSecondCategoryMap": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "bootcamp": {"ref":"Bootcamp","required":true},
            "secondCategory": {"ref":"SecondCategory","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IsOnline": {
        "dataType": "refEnum",
        "enums": [0,1,2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Status": {
        "dataType": "refEnum",
        "enums": [0,1,2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BootcampDetail": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "productTitle": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "originUrl": {"dataType":"string","required":true},
            "regStartDate": {"dataType":"datetime","required":true},
            "regEndDate": {"dataType":"datetime","required":true},
            "studyTime": {"dataType":"string"},
            "nDaysAWeek": {"dataType":"double"},
            "quota": {"dataType":"double"},
            "isOnline": {"ref":"IsOnline"},
            "location": {"dataType":"string"},
            "tuition": {"dataType":"double"},
            "contact": {"dataType":"string"},
            "views": {"dataType":"double"},
            "thumbnailUrl": {"dataType":"string"},
            "ciUrl": {"dataType":"string"},
            "content": {"dataType":"string"},
            "curriculumn": {"dataType":"string"},
            "nth": {"dataType":"double"},
            "status": {"ref":"Status"},
            "startDate": {"dataType":"datetime"},
            "endDate": {"dataType":"datetime"},
            "bootcamp": {"ref":"Bootcamp","required":true},
            "bootcampDetailSkillMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampDetailSkillMap"},"required":true},
            "bootcampDetailTagMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampDetailTagMap"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BootcampDetailSkillMap": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "bootcampDetail": {"ref":"BootcampDetail","required":true},
            "skill": {"ref":"Skill","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Skill": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "skill": {"dataType":"string","required":true},
            "bootcampDetailSkillMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampDetailSkillMap"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BootcampDetailTagMap": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "bootcampDetail": {"ref":"BootcampDetail","required":true},
            "tags": {"ref":"Tag","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tag": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "tag": {"dataType":"string","required":true},
            "bootcampDetailTagMaps": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampDetailTagMap"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Review": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime","required":true},
            "origin_url": {"dataType":"string","required":true},
            "bootcamp": {"ref":"Bootcamp","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_BootcampBrand-Array_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"BootcampBrand"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ErrorResponsePayload.Exclude_keyofErrorResponsePayload.details-or-stack__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"statusCode":{"dataType":"double","required":true},"success":{"dataType":"boolean","required":true},"message":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_ErrorResponsePayload.details-or-stack_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_ErrorResponsePayload.Exclude_keyofErrorResponsePayload.details-or-stack__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonErrorPayload": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_ErrorResponsePayload.details-or-stack_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBootcampBrandDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "eduCompanyId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_Bootcamp-Array_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Bootcamp"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBootcampDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "bootcampBrandId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GetCategoriesResDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "secondCategories": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_GetCategoriesResDto-Array_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"GetCategoriesResDto"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_null_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"enum","enums":[null]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateCategoryReqDto": {
        "dataType": "refObject",
        "properties": {
            "firstCategory": {"dataType":"string","required":true},
            "secondCategories": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FieldErrors": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"any"},"message":{"dataType":"string","required":true}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ErrorResponsePayload.Exclude_keyofErrorResponsePayload.stack__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"details":{"ref":"FieldErrors"},"statusCode":{"dataType":"double","required":true},"success":{"dataType":"boolean","required":true},"message":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_ErrorResponsePayload.stack_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_ErrorResponsePayload.Exclude_keyofErrorResponsePayload.stack__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ValidationErrorPayload": {
        "dataType": "refAlias",
        "type": {"ref":"Omit_ErrorResponsePayload.stack_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateSecondCategoryReqDto": {
        "dataType": "refObject",
        "properties": {
            "secondCategory": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorResponsePayload": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "details": {"ref":"FieldErrors"},
            "stack": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_EduCompany-Array_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"EduCompany"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateEduCompanyDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponsePayload_Tag-Array_": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Tag"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateTagDto": {
        "dataType": "refObject",
        "properties": {
            "tag": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/bootcamp-brands',
            ...(fetchMiddlewares<RequestHandler>(BootcampBrandController)),
            ...(fetchMiddlewares<RequestHandler>(BootcampBrandController.prototype.getByEduCompanyId)),

            async function BootcampBrandController_getByEduCompanyId(request: any, response: any, next: any) {
            const args = {
                    eduCompanyId: {"in":"query","name":"eduCompanyId","required":true,"dataType":"string"},
                    NotFoundResponse: {"in":"res","name":"404","required":true,"ref":"CommonErrorPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<BootcampBrandController>(BootcampBrandController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.getByEduCompanyId.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/bootcamp-brands',
            ...(fetchMiddlewares<RequestHandler>(BootcampBrandController)),
            ...(fetchMiddlewares<RequestHandler>(BootcampBrandController.prototype.postBootcampBrand)),

            async function BootcampBrandController_postBootcampBrand(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"CreateBootcampBrandDto"},
                    NotFoundResponse: {"in":"res","name":"404","required":true,"ref":"CommonErrorPayload"},
                    ConflictResponse: {"in":"res","name":"409","required":true,"ref":"CommonErrorPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<BootcampBrandController>(BootcampBrandController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postBootcampBrand.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/bootcamps',
            ...(fetchMiddlewares<RequestHandler>(BootcampController)),
            ...(fetchMiddlewares<RequestHandler>(BootcampController.prototype.getByBootcampBrandId)),

            async function BootcampController_getByBootcampBrandId(request: any, response: any, next: any) {
            const args = {
                    bootcampBrandId: {"in":"query","name":"bootcampBrandId","required":true,"dataType":"string"},
                    NotFoundResponse: {"in":"res","name":"404","required":true,"ref":"CommonErrorPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<BootcampController>(BootcampController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.getByBootcampBrandId.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/bootcamps',
            ...(fetchMiddlewares<RequestHandler>(BootcampController)),
            ...(fetchMiddlewares<RequestHandler>(BootcampController.prototype.postBootcampBrand)),

            async function BootcampController_postBootcampBrand(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"CreateBootcampDto"},
                    NotFoundResponse: {"in":"res","name":"404","required":true,"ref":"CommonErrorPayload"},
                    ConflictResponse: {"in":"res","name":"409","required":true,"ref":"CommonErrorPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<BootcampController>(BootcampController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postBootcampBrand.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/categories',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.getCategories)),

            async function CategoryController_getCategories(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<CategoryController>(CategoryController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.getCategories.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/categories',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.postCategory)),

            async function CategoryController_postCategory(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"CreateCategoryReqDto"},
                    BadRequestResponse: {"in":"res","name":"400","required":true,"ref":"ValidationErrorPayload"},
                    ConflictResponse: {"in":"res","name":"409","required":true,"ref":"CommonErrorPayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<CategoryController>(CategoryController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postCategory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/categories/:firstCategoryId/second-categories',
            ...(fetchMiddlewares<RequestHandler>(CategoryController)),
            ...(fetchMiddlewares<RequestHandler>(CategoryController.prototype.postSecondCategory)),

            async function CategoryController_postSecondCategory(request: any, response: any, next: any) {
            const args = {
                    firstCategoryId: {"in":"path","name":"firstCategoryId","required":true,"dataType":"double"},
                    body: {"in":"body","name":"body","required":true,"ref":"CreateSecondCategoryReqDto"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    BadRequestResponse: {"in":"res","name":"400","required":true,"ref":"ValidationErrorPayload"},
                    NotFoundResponse: {"in":"res","name":"404","required":true,"ref":"ErrorResponsePayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<CategoryController>(CategoryController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postSecondCategory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/edu-companies',
            ...(fetchMiddlewares<RequestHandler>(EduCompanyController)),
            ...(fetchMiddlewares<RequestHandler>(EduCompanyController.prototype.getEduCompanies)),

            async function EduCompanyController_getEduCompanies(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<EduCompanyController>(EduCompanyController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.getEduCompanies.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/edu-companies',
            ...(fetchMiddlewares<RequestHandler>(EduCompanyController)),
            ...(fetchMiddlewares<RequestHandler>(EduCompanyController.prototype.postEduCompany)),

            async function EduCompanyController_postEduCompany(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"CreateEduCompanyDto"},
                    ConflictResponse: {"in":"res","name":"409","required":true,"ref":"ErrorResponsePayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<EduCompanyController>(EduCompanyController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postEduCompany.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/tags',
            ...(fetchMiddlewares<RequestHandler>(TagController)),
            ...(fetchMiddlewares<RequestHandler>(TagController.prototype.getTags)),

            async function TagController_getTags(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TagController>(TagController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.getTags.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/tags',
            ...(fetchMiddlewares<RequestHandler>(TagController)),
            ...(fetchMiddlewares<RequestHandler>(TagController.prototype.postTag)),

            async function TagController_postTag(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"CreateTagDto"},
                    ConflictResponse: {"in":"res","name":"409","required":true,"ref":"ErrorResponsePayload"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TagController>(TagController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }


              const promise = controller.postTag.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"silently-remove-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"silently-remove-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
