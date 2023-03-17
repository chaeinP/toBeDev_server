import { BootcampBrand } from '.';
import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from './Base';

@Entity({ name: 'edu_company' })
export class EduCompany extends Base {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => BootcampBrand, bootcampBrand => bootcampBrand.eduCompany, {
    cascade: true,
  })
  bootcampBrands: BootcampBrand[];
}
