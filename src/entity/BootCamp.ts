import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootcampBrand } from '@entity/BootcampBrand';
import { BootcampSecondCategoryMap } from './BootcampSecondCategoryMap';
import { BootcampDetail } from './BootcampDetail';
import { Review } from './Review';

@Entity({ name: 'bootcamp' })
export class Bootcamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => BootcampBrand, bootcampBrand => bootcampBrand.bootcamp)
  @JoinColumn({ name: 'bootcamp_brand_id' })
  bootcampBrand: BootcampBrand;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.bootcamp,
  )
  bootcampSecondCategoryMap: BootcampSecondCategoryMap[];

  @OneToMany(() => BootcampDetail, bootcampDetail => bootcampDetail.bootcamp)
  bootcampDetail: BootcampDetail[];

  @OneToMany(() => Review, review => review.bootcamp)
  review: Review[];
}
