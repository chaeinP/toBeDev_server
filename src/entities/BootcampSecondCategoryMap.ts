import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bootcamp, SecondCategory } from '.';

@Entity({ name: 'bootcamp_second_category_map' })
export class BootcampSecondCategoryMap {
  @PrimaryGeneratedColumn()
  id: number;

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
