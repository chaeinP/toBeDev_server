import { dataSource } from '@config/dataSource';
import { FirstCategory } from '@entities/FirstCategory';

export const FirstCategoryRepository = dataSource.getRepository(FirstCategory);
//   .extend({
//     findByName(firstName: string, lastName: string) {
//       return this.createQueryBuilder('user')
//         .where('user.firstName = :firstName', { firstName })
//         .andWhere('user.lastName = :lastName', { lastName })
//         .getMany();
//     },
//   });
