import { BootCampDetailSkillsMap } from './BootCampDetailSkillsMap';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'skills' })
export class Skills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  skill: string;

  @OneToMany(
    () => BootCampDetailSkillsMap,
    bootCampDetailSkillsMap => bootCampDetailSkillsMap.bootCampDetail,
  )
  bootCampDetailSkillsMap: BootCampDetailSkillsMap[];
}
