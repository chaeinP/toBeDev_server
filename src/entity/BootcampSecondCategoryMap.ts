import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SecondCategory } from '@entity/SecondCategory';
import { Bootcamp } from './Bootcamp';

@Entity({ name: 'bootcamp_second_category_map' })
export class BootcampSecondCategoryMap extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.bootcampSecondCategoryMap)
  @JoinColumn({ name: 'bootcamp_id', referencedColumnName: 'id' })
  bootcamp: Bootcamp;

  @ManyToOne(
    () => SecondCategory,
    secondCategory => secondCategory.bootcampSecondCategoryMap,
  )
  @JoinColumn({ name: 'second_category_id', referencedColumnName: 'id' })
  secondCategory: SecondCategory;
}
