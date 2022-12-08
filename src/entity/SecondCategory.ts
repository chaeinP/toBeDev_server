import { BootcampSecondCategoryMap } from './BootcampSecondCategoryMap';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FirstCategory } from '@entity/FirstCategory';

@Entity({ name: 'second_category' })
export class SecondCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => FirstCategory, firstCategory => firstCategory.secondCategory)
  @JoinColumn({ name: 'first_category_id', referencedColumnName: 'id' })
  firstCategory: FirstCategory;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.secondCategory,
  )
  bootcampSecondCategoryMap: BootcampSecondCategoryMap[];
}
