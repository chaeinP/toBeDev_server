import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootCampBrand } from '@entity/BootCampBrand';
import { BootCampSecondCategoryMap } from './BootCampSecondCategory';
import { BootCampDetail } from './BootCampDetail';

@Entity({ name: 'bootcamp' })
export class BootCamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => BootCampBrand, bootCampBrand => bootCampBrand.bootCamp)
  @JoinColumn({ name: 'bootcamp_id' })
  bootCampBrand: BootCampBrand;

  @OneToMany(
    () => BootCampSecondCategoryMap,
    bootCampSecondCategoryMap => bootCampSecondCategoryMap.bootCamp,
  )
  bootCampSecondCategoryMap: BootCampSecondCategoryMap[];

  @OneToMany(() => BootCampDetail, bootCampDetail => bootCampDetail.bootCamp)
  bootCampDetail: BootCampDetail[];
}
