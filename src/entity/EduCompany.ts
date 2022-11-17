import { BootCampBrand } from '@entity/BootCampBrand';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'edu_company' })
export class EduCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => BootCampBrand, bootCampBrand => bootCampBrand.eduCompany)
  bootCampBrand: BootCampBrand[];
}
