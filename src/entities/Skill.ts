import { BootcampDetailSkillMap } from './BootcampDetailSkillMap';
import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './Base';

@Entity({ name: 'skill' })
export class Skill extends Base {
  @Column({ type: 'varchar', length: 255 })
  skill: string;

  @OneToMany(
    () => BootcampDetailSkillMap,
    bootcampDetailSkillMap => bootcampDetailSkillMap.bootcampDetail,
  )
  bootcampDetailSkillMaps: BootcampDetailSkillMap[];
}
