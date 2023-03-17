import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Bootcamp, SecondCategory } from '.';
import { Base } from './Base';

@Entity({ name: 'bootcamp_second_category_map' })
export class BootcampSecondCategoryMap extends Base {
  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.bootcampSecondCategoryMaps)
  @JoinColumn({ name: 'bootcamp_id', referencedColumnName: 'id' })
  bootcamp: Bootcamp;

  @ManyToOne(
    () => SecondCategory,
    secondCategory => secondCategory.bootcampSecondCategoryMaps,
  )
  @JoinColumn({ name: 'second_category_id', referencedColumnName: 'id' })
  secondCategory: SecondCategory;
}
