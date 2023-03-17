import { BootcampSecondCategoryMap } from './BootcampSecondCategoryMap';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FirstCategory } from '.';
import { Base } from './Base';

@Entity({ name: 'second_category' })
export class SecondCategory extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @ManyToOne(
    () => FirstCategory,
    firstCategory => firstCategory.secondCategories,
  )
  @JoinColumn({ name: 'first_category_id', referencedColumnName: 'id' })
  firstCategory: FirstCategory;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.secondCategory,
    { cascade: true },
  )
  bootcampSecondCategoryMaps: BootcampSecondCategoryMap[];
}
