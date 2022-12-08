import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { EduCompany } from '@entity/EduCompany';
import { Bootcamp } from './Bootcamp';

@Entity({ name: 'bootcamp_brand' })
export class BootcampBrand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => EduCompany, eduCompany => eduCompany.bootcampBrand)
  @JoinColumn({ name: 'edu_company_id', referencedColumnName: 'id' })
  eduCompany: EduCompany;

  @OneToMany(() => Bootcamp, bootcamp => bootcamp.bootcampBrand)
  bootcamp: Bootcamp[];
}
