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
import { provideSingleton } from '@ioc/provideSingletone';
import { TagService } from '@service/TagService';
import { Tag } from '@entities/Tag';
import { CreateTagDto } from '@dto/tag/CreateTagDto';
import { ResponsePayload } from '@common/responses/ResponsePayload';
import { ErrorResponsePayload } from '@common/responses/ErrorResponsePayload';

@Route('/tags')
@Tags('Tag')
@provideSingleton(TagController)
export class TagController extends Controller {
  constructor(@inject(TagService) private tagService: TagService) {
    super();
  }

  @Get('/')
  @SuccessResponse(200, 'OK')
  async getTags(): Promise<ResponsePayload<Tag[]>> {
    const tags = await this.tagService.getTags();
    return new ResponsePayload(httpStatus.OK, tags);
  }

  @Post('/')
  @SuccessResponse(201, 'CREATED')
  async postTag(
    @Body() body: CreateTagDto,
    @Res() ConflictResponse: TsoaResponse<409, ErrorResponsePayload>,
  ): Promise<ResponsePayload<null>> {
    await this.tagService.createTag(body);
    this.setStatus(httpStatus.CREATED);
    return new ResponsePayload(httpStatus.CREATED);
  }
}
