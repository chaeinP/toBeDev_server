import { BootcampBrand } from '@entity/BootcampBrand';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity({ name: 'edu_company' })
export class EduCompany extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => BootcampBrand, bootcampBrand => bootcampBrand.eduCompany)
  bootcampBrand: BootcampBrand[];
}
