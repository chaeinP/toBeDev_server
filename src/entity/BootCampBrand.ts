import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EduCompany } from '@entity/EduCompany';
import { BootCamp } from './BootCamp';

@Entity({ name: 'bootcamp_brand' })
export class BootCampBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => EduCompany, eduCompany => eduCompany.bootCampBrand)
  @JoinColumn({ name: 'edu_company_id' })
  eduCompany: EduCompany;

  @OneToMany(() => BootCamp, bootCamp => bootCamp.bootCampBrand)
  bootCamp: BootCamp[];
}
