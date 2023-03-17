import { FirstCategory } from '@entities/FirstCategory';

export interface CreateCategoryReqDto {
  firstCategory: string;
  secondCategories: string[];
}

export interface GetCategoriesResDto {
  id: number;
  name: string;
  secondCategories: {
    id: number;
    name: string;
  }[];
}

export interface CreateSecondCategoryReqDto {
  secondCategory: string;
}
