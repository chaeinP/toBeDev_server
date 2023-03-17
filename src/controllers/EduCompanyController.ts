import httpStatus from 'http-status';
import { inject } from 'inversify';
import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Route,
  SuccessResponse,
  Tags,
  TsoaResponse,
} from 'tsoa';
import { CreateEduCompanyDto } from '@dto/eduCompany/CreateEduCompanyDto';
import { EduCompany } from '@entities/EduCompany';
import { provideSingleton } from '@ioc/provideSingletone';
import { EduCompanyService } from '@service/EduCompanyService';
import { ErrorResponsePayload } from '@common/responses/ErrorResponsePayload';
import { ResponsePayload } from '@common/responses/ResponsePayload';

@Route('/edu-companies')
@Tags('Education Company')
@provideSingleton(EduCompanyController)
export class EduCompanyController extends Controller {
  constructor(
    @inject(EduCompanyService) private eduCompanyService: EduCompanyService,
  ) {
    super();
  }

  @Get('/')
  @SuccessResponse(200, 'OK')
  async getEduCompanies(): Promise<ResponsePayload<EduCompany[]>> {
    const tags = await this.eduCompanyService.getEduCompanies();
    return new ResponsePayload(httpStatus.OK, tags);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postEduCompany(
    @Body() body: CreateEduCompanyDto,
    @Res() ConflictResponse: TsoaResponse<409, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.eduCompanyService.createEduCompany(body);
    this.setStatus(httpStatus.CREATED);
    return new ResponsePayload(httpStatus.CREATED);
  }
}
