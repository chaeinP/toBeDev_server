import { CreateSecondCategoryDto } from './../dto/category/CreateSecondCategoryDto';
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
} from 'tsoa';

import { ResponsePayload, ErrorResponsePayload } from '@utils/response';
import { provideSingleton } from '@ioc/provideSingletone';
import { CreateCategoryDto } from '@dto/category/CreateCategoryDto';
import { CategoryService } from '@service/CategoryService';
import { FirstCategory } from '@entities/index';

@Route('/category')
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
  async getCategoryList(): Promise<ResponsePayload<FirstCategory[]>> {
    const categoryList = await this.categoryService.getCategoryList();
    return new ResponsePayload(httpStatus.OK, categoryList);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postCategory(
    @Body() body: CreateCategoryDto,
    @Res() ConflictResponse: TsoaResponse<409, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.categoryService.createCategory(body);
    this.setStatus(httpStatus.CREATED);
    return new ResponsePayload(httpStatus.CREATED);
  }

  @Post('/second')
  @SuccessResponse(201, 'CREATED')
  async postSecondCategory(
    @Body() body: CreateSecondCategoryDto,
    @Res() NotFoundResponse: TsoaResponse<404, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.categoryService.createSecondCategory(body);
    this.setStatus(httpStatus.CREATED);
    return new ResponsePayload(httpStatus.CREATED);
  }
}
