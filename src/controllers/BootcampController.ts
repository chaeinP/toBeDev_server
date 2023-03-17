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
import httpStatus from 'http-status';

import { Bootcamp } from '@entities/Bootcamp';
import { CreateBootcampDto } from '@dto/bootcamp/CreateBootcampDto';
import { BootcampService } from '@service/BootcampService';
import { provideSingleton } from '@ioc/provideSingletone';
import { CommonErrorPayload } from '@common/responses/ErrorResponsePayload';
import { ResponsePayload } from '@common/responses/ResponsePayload';

@Route('/bootcamps')
@Tags('Bootcamp')
@provideSingleton(BootcampController)
export class BootcampController extends Controller {
  constructor(
    @inject(BootcampService) private bootcampService: BootcampService,
  ) {
    super();
  }

  @Get('/')
  @SuccessResponse(200, 'OK')
  async getByBootcampBrandId(
    @Query() bootcampBrandId: string,
    @Res() NotFoundResponse: TsoaResponse<404, CommonErrorPayload>,
  ): Promise<ResponsePayload<Bootcamp[]>> {
    const bootcamps = await this.bootcampService.getByBootcampBrandId(
      +bootcampBrandId,
    );

    this.setStatus(httpStatus.OK);
    return new ResponsePayload(httpStatus.OK, bootcamps);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postBootcampBrand(
    @Body() body: CreateBootcampDto,
    @Res() NotFoundResponse: TsoaResponse<404, CommonErrorPayload>,
    @Res() ConflictResponse: TsoaResponse<409, CommonErrorPayload>,
  ) {
    await this.bootcampService.createBootcamp(body);
  }
}
