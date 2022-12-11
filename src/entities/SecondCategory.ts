import { BootcampSecondCategoryMap } from './BootcampSecondCategoryMap';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FirstCategory } from '.';

@Entity({ name: 'second_category' })
export class SecondCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255 })
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
  )
  bootcampSecondCategoryMaps: BootcampSecondCategoryMap[];
}
