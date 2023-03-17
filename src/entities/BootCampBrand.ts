import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Bootcamp, EduCompany } from '.';
import { Base } from './Base';

@Entity({ name: 'bootcamp_brand' })
export class BootcampBrand extends Base {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => EduCompany, eduCompany => eduCompany.bootcampBrands)
  @JoinColumn({ name: 'edu_company_id', referencedColumnName: 'id' })
  eduCompany: EduCompany;

  @OneToMany(() => Bootcamp, bootcamp => bootcamp.bootcampBrand, {
    cascade: true,
  })
  bootcamps: Bootcamp[];
}
