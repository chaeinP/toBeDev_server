import { CreateCategoryDto } from '@dto/category/CreateCategoryDto';
import { CreateSecondCategoryDto } from '@dto/category/CreateSecondCategoryDto';
import { FirstCategory } from '@entities/FirstCategory';
import { SecondCategory } from '@entities/SecondCategory';
import { ConflictException } from '@exceptions/ConflictException';
import { NotFoundException } from '@exceptions/NotFoundExeption';
import { provideSingleton } from '@ioc/provideSingletone';
import { FirstCategoryRepository } from '@repositories/FirstCatetoryRepository';
import { SecondCategoryRepository } from '@repositories/SecondCategoryRepository';

@provideSingleton(CategoryService)
export class CategoryService {
  async getCategoryList() {
    const categoryList = await FirstCategoryRepository.find({
      relations: ['secondCategories'],
    });
    return categoryList;
  }

  async createCategory(data: CreateCategoryDto) {
    const { firstCategory: firstCategoryName, secondCategories } = data;

    // 기존에 존재하는 메인테고리인지 확인
    const firstCategoryRow = await FirstCategoryRepository.findOne({
      where: { name: firstCategoryName },
    });
    if (firstCategoryRow)
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
    const firstCategory = new FirstCategory();
    firstCategory.name = firstCategoryName;
    if (secondCategories.length > 0)
      firstCategory.secondCategories = secondCategories.map(name =>
        SecondCategoryRepository.create({ name }),
      );

    await FirstCategoryRepository.save(firstCategory);
  }

  async createSecondCategory(data: CreateSecondCategoryDto) {
    const { firstCategoryId, secondCategory: name } = data;
    const firstCategory = await FirstCategoryRepository.findOneBy({
      id: firstCategoryId,
    });
    if (!firstCategory)
      new NotFoundException('first category를 찾을 수 없습니다.');

    const secondCategory = SecondCategoryRepository.create({
      name,
      firstCategory: firstCategory!,
    });

    await SecondCategoryRepository.save(secondCategory);
  }
}
