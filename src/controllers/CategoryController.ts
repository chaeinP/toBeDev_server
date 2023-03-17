import { inject } from 'inversify';
import httpStatus from 'http-status';
import {
  Route,
  Tags,
  Controller,
  Post,
  Body,
  Res,
  TsoaResponse,
  SuccessResponse,
  Get,
  Path,
  Middlewares,
  Request,
} from 'tsoa';

import { provideSingleton } from '@ioc/provideSingletone';
import {
  CreateSecondCategoryReqDto,
  CreateCategoryReqDto,
  GetCategoriesResDto,
} from '@dto/category';
import { CategoryService } from '@service/CategoryService';
import { ResponsePayload } from '@common/responses/ResponsePayload';
import {
  CommonErrorPayload,
  ErrorResponsePayload,
  ValidationErrorPayload,
} from '@common/responses/ErrorResponsePayload';
import { firstCategoryIdValidator } from '@middlewares/firstCategoryIdValidator';
import * as express from 'express';

@Route('/categories')
@Tags('Category')
@provideSingleton(CategoryController)
export class CategoryController extends Controller {
  constructor(
    @inject(CategoryService) private categoryService: CategoryService,
  ) {
    super();
  }

  @Get('/')
  @SuccessResponse(200, 'OK')
  async getCategories(): Promise<ResponsePayload<GetCategoriesResDto[]>> {
    const categoryList = await this.categoryService.getCategories();
    return new ResponsePayload(httpStatus.OK, categoryList);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postCategory(
    @Body() body: CreateCategoryReqDto,
    @Res() BadRequestResponse: TsoaResponse<400, ValidationErrorPayload>,
    @Res() ConflictResponse: TsoaResponse<409, CommonErrorPayload>,
  ): Promise<ResponsePayload<null>> {
    await this.categoryService.createCategory(body);
    return new ResponsePayload(httpStatus.CREATED);
  }

  @Post('/{firstCategoryId}/second-categories')
  @Middlewares(firstCategoryIdValidator)
  @SuccessResponse(201, 'CREATED')
  async postSecondCategory(
    @Path() firstCategoryId: number,
    @Body() body: CreateSecondCategoryReqDto,
    @Request() req: express.Request,
    @Res() BadRequestResponse: TsoaResponse<400, ValidationErrorPayload>,
    @Res() NotFoundResponse: TsoaResponse<404, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.categoryService.createSecondCategory(
      body,
      req.extraData.firstCategory,
    );
    return new ResponsePayload(httpStatus.CREATED);
  }
}
