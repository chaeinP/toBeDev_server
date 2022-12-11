import { dataSource } from '@config/dataSource';
import { SecondCategory } from '@entities/SecondCategory';

export const SecondCategoryRepository =
  dataSource.getRepository(SecondCategory);
