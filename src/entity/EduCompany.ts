import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'edu_company' })
export class EduCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}
