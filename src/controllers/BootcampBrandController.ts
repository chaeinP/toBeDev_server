import httpStatus from 'http-status';
import { inject } from 'inversify';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  Route,
  SuccessResponse,
  Tags,
  TsoaResponse,
} from 'tsoa';
import { BootcampBrand } from '@entities/index';
import { provideSingleton } from '@ioc/provideSingletone';
import { BootcampBrandService } from '@service/BootcampBrandService';
import { CreateBootcampBrandDto } from '@dto/bootcampBrand/CreateBootcampBrandDto';
import { CommonErrorPayload } from '@common/responses/ErrorResponsePayload';
import { ResponsePayload } from '@common/responses/ResponsePayload';

@Route('/bootcamp-brands')
@Tags('Bootcamp Brand')
@provideSingleton(BootcampBrandController)
export class BootcampBrandController extends Controller {
  constructor(
    @inject(BootcampBrandService)
    private bootcampBrandService: BootcampBrandService,
  ) {
    super();
  }

  @Get('/')
  @SuccessResponse(200, 'OK')
  async getByEduCompanyId(
    @Query() eduCompanyId: string,
    @Res() NotFoundResponse: TsoaResponse<404, CommonErrorPayload>,
  ): Promise<ResponsePayload<BootcampBrand[]>> {
    const bootcampBrands = await this.bootcampBrandService.getByEduCompanyId(
      +eduCompanyId,
    );
    return new ResponsePayload(httpStatus.OK, bootcampBrands);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postBootcampBrand(
    @Body() body: CreateBootcampBrandDto,
    @Res() NotFoundResponse: TsoaResponse<404, CommonErrorPayload>,
    @Res() ConflictResponse: TsoaResponse<409, CommonErrorPayload>,
  ) {
    await this.bootcampBrandService.createBootcampBrand(body);
  }
}
