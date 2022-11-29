import { BootCampDetailsSkillsMap } from './BootCampDetailsSkillsMap';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'skills' })
export class Skills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  skill: string;

  @OneToMany(
    () => BootCampDetailsSkillsMap,
    bootCampDetailsSkillsMap => bootCampDetailsSkillsMap.bootCampDetails,
  )
  bootCampDetailSkillsMap: BootCampDetailsSkillsMap[];
}
