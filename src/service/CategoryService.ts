import {
  CreateCategoryReqDto,
  CreateSecondCategoryReqDto,
} from '@dto/category';
import { FirstCategory } from '@entities/FirstCategory';
import { ConflictException } from '@common/exceptions/ConflictException';
import { provideSingleton } from '@ioc/provideSingletone';
import { FirstCategoryRepository } from '@repositories/FirstCatetoryRepository';
import { SecondCategoryRepository } from '@repositories/SecondCategoryRepository';

@provideSingleton(CategoryService)
export class CategoryService {
  async getCategories() {
    const categoryList = await FirstCategoryRepository.find({
      relations: ['secondCategories'],
    });
    return categoryList;
  }

  async createCategory(data: CreateCategoryReqDto) {
    const { firstCategory: firstCategoryName, secondCategories } = data;

    // 기존에 존재하는 메인테고리인지 확인
    const firstCategory = await FirstCategoryRepository.findOne({
      where: { name: firstCategoryName },
    });
    if (firstCategory)
      throw new ConflictException('이미 존재하는 first category입니다.');

    // 기존에 존재하는 서브카테고리인지 확인
    for (const name of secondCategories) {
      const secondCategoryRow = await SecondCategoryRepository.findOne({
        where: { name },
      });
      if (secondCategoryRow)
        throw new ConflictException('이미 존재하는 second category입니다.');
    }

    // db에 저장
    const newFirstCategory = new FirstCategory();
    newFirstCategory.name = firstCategoryName;
    if (secondCategories.length > 0)
      newFirstCategory.secondCategories = secondCategories.map(name =>
        SecondCategoryRepository.create({ name }),
      );

    await FirstCategoryRepository.save(newFirstCategory);
  }

  async createSecondCategory(
    data: CreateSecondCategoryReqDto,
    firstCategory: FirstCategory,
  ) {
    const { secondCategory: name } = data;
    const secondCategory = SecondCategoryRepository.create({
      name,
      firstCategory,
    });

    await SecondCategoryRepository.save(secondCategory);
  }
}
