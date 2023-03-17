import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import {
  BootcampBrand,
  BootcampSecondCategoryMap,
  BootcampDetail,
  Review,
} from '.';
import { Base } from './Base';

@Entity({ name: 'bootcamp' })
export class Bootcamp extends Base {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => BootcampBrand, bootcampBrand => bootcampBrand.bootcamps)
  @JoinColumn({ name: 'bootcamp_brand_id', referencedColumnName: 'id' })
  bootcampBrand: BootcampBrand;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.bootcamp,
    { cascade: true },
  )
  bootcampSecondCategoryMaps: BootcampSecondCategoryMap[];

  @OneToMany(() => BootcampDetail, bootcampDetail => bootcampDetail.bootcamp, {
    cascade: true,
  })
  bootcampDetails: BootcampDetail[];

  @OneToMany(() => Review, review => review.bootcamp, { cascade: true })
  reviews: Review[];
}
