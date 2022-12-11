import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  BootcampBrand,
  BootcampSecondCategoryMap,
  BootcampDetail,
  Review,
} from '.';

@Entity({ name: 'bootcamp' })
export class Bootcamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => BootcampBrand, bootcampBrand => bootcampBrand.bootcamps)
  @JoinColumn({ name: 'bootcamp_brand_id', referencedColumnName: 'id' })
  bootcampBrand: BootcampBrand;

  @OneToMany(
    () => BootcampSecondCategoryMap,
    bootcampSecondCategoryMap => bootcampSecondCategoryMap.bootcamp,
  )
  bootcampSecondCategoryMaps: BootcampSecondCategoryMap[];

  @OneToMany(() => BootcampDetail, bootcampDetail => bootcampDetail.bootcamp)
  bootcampDetails: BootcampDetail[];

  @OneToMany(() => Review, review => review.bootcamp)
  reviews: Review[];
}
