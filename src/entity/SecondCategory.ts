import { BootcampSecondCategoryMap } from './BootcampSecondCategoryMap';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FirstCategory } from '@entity/FirstCategory';

@Entity({ name: 'second_category' })
export class SecondCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => FirstCategory, firstCategory => firstCategory.secondCategory)
  @JoinColumn({ name: 'first_category_id' })
  firstCategory: FirstCategory;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.secondCategory,
  )
  bootcampSecondCategoryMap: BootcampSecondCategoryMap[];
}
