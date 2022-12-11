import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bootcamp, EduCompany } from '.';

@Entity({ name: 'bootcamp_brand' })
export class BootcampBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => EduCompany, eduCompany => eduCompany.bootcampBrands)
  @JoinColumn({ name: 'edu_company_id', referencedColumnName: 'id' })
  eduCompany: EduCompany;

  @OneToMany(() => Bootcamp, bootcamp => bootcamp.bootcampBrand)
  bootcamps: Bootcamp[];
}
