import { NotFoundException } from '@common/exceptions/NotFoundExeption';
import { FirstCategoryRepository } from '@repositories/FirstCatetoryRepository';
import { Request, Response, NextFunction } from 'express';

export const firstCategoryIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const firstCategoryId = req.params.firstCategoryId;
    const firstCategory = await FirstCategoryRepository.findOne({
      where: { id: +firstCategoryId },
    });
    if (!firstCategory)
      throw new NotFoundException('존재하지 않는 카테고리 입니다.');
    else {
      req.extraData = { firstCategory };
      req.body.firstCategory = firstCategory;
      next();
    }
  } catch (err) {
    next(err);
  }
};
