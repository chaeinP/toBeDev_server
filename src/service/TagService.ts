import { Tag } from '@entities/Tag';
import { CreateTagDto } from '@dto/tag/CreateTagDto';
import { ConflictException } from '@common/exceptions/ConflictException';
import { provideSingleton } from '@ioc/provideSingletone';
import { TagRepository } from '@repositories/TagRepository';

@provideSingleton(TagService)
export class TagService {
  async getTags() {
    const categoryList = await TagRepository.find();
    return categoryList;
  }

  async createTag(data: CreateTagDto) {
    const { tag } = data;

    // 기존에 존재하는 태그인지 확인
    const tagRow = await TagRepository.findOne({
      where: { tag },
    });
    if (tagRow) throw new ConflictException('이미 존재하는 태그입니다.');

    // db에 저장
    const newTag = new Tag();
    newTag.tag = tag;

    await TagRepository.save(newTag);
  }
}
