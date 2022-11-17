import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SecondCategory } from '@entity/SecondCategory';
import { BootCamp } from './BootCamp';

@Entity({ name: 'bootcamp_second_category_map' })
export class BootCampSecondCategoryMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BootCamp, bootCamp => bootCamp.bootCampSecondCategoryMap)
  @JoinColumn({ name: 'bootcamp_id' })
  bootCamp: BootCamp;

  @ManyToOne(
    () => SecondCategory,
    secondCategory => secondCategory.bootCampSecondCategoryMap,
  )
  @JoinColumn({ name: 'second_category_id' })
  secondCategory: SecondCategory;
}
