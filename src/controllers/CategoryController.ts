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
} from 'tsoa';

import { ResponsePayload, ErrorResponsePayload } from '@utils/response';
import { provideSingleton } from '@ioc/provideSingletone';
import { CategoryCreateDto } from '@dto/category/CategoryCreateDto';
import { CategoryService } from '@service/CategoryService';

@Route('/category')
@Tags('Category')
@provideSingleton(CategoryController)
export class CategoryController extends Controller {
  constructor(
    @inject(CategoryService) private categoryService: CategoryService,
  ) {
    super();
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postCategory(
    @Body() body: CategoryCreateDto,
    @Res() ConflictResponse: TsoaResponse<409, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.categoryService.createCategory(body);
    this.setStatus(httpStatus.CREATED);
    return new ResponsePayload(httpStatus.CREATED);
  }
}
