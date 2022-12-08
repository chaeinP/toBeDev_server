import { BootcampDetailSkillMap } from './BootcampDetailSkillMap';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'skill' })
export class Skill extends BaseEntity {
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
