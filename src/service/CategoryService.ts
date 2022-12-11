import { CategoryCreateDto } from '@dto/category/CategoryCreateDto';
import { FirstCategory } from '@entities/FirstCategory';
import { ConflictException } from '@exceptions/ConflictException';
import { provideSingleton } from '@ioc/provideSingletone';
import { FirstCategoryRepository } from '@repositories/FirstCatetoryRepository';
import { SecondCategoryRepository } from '@repositories/SecondCategoryRepository';

@provideSingleton(CategoryService)
export class CategoryService {
  async createCategory(data: CategoryCreateDto) {
    const { firstCategory: firstCategoryName, secondCategories } = data;

    // 기존에 존재하는 메인테고리인지 확인
    const firstCategoryRow = await FirstCategoryRepository.findOne({
      where: { name: firstCategoryName },
    });
    if (firstCategoryRow) throw new ConflictException();

    // 기존에 존재하는 서브카테고리인지 확인
    for (const name of secondCategories) {
      const secondCategoryRow = await SecondCategoryRepository.findOne({
        where: { name },
      });
      if (secondCategoryRow) throw new ConflictException();
    }

    const firstCategory = new FirstCategory();
    firstCategory.name = firstCategoryName;
    if (secondCategories.length > 0)
      firstCategory.secondCategories = secondCategories.map(name =>
        SecondCategoryRepository.create({ name }),
      );

    await FirstCategoryRepository.save(firstCategory);
  }
}
