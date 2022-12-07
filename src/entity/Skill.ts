import { BootcampDetailSkillMap } from './BootcampDetailSkillMap';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'skills' })
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  skill: string;

  @OneToMany(
    () => BootcampDetailSkillMap,
    bootcampDetailSkillMap => bootcampDetailSkillMap.bootcampDetail,
  )
  bootcampDetailSkillMap: BootcampDetailSkillMap[];
}
