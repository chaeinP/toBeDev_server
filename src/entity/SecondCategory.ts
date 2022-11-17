import { BootCampSecondCategoryMap } from './BootCampSecondCategory';
import {
  Column,
  Entity,
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
  firstCategory: FirstCategory;

  @OneToMany(
    () => BootCampSecondCategoryMap,
    bootCampSecondCategoryMap => bootCampSecondCategoryMap.secondCategory,
  )
  bootCampSecondCategoryMap: BootCampSecondCategoryMap[];
}
