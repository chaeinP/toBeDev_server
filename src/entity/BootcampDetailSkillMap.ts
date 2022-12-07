import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BootcampDetail } from './BootcampDetail';
import { Skill } from './Skill';

@Entity({ name: 'bootcamp_details_skills_map' })
export class BootcampDetailSkillMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailSkillMap,
  )
  @JoinColumn({ name: 'bootcamp_details_id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Skill, skill => skill.bootcampDetailSkillMap)
  @JoinColumn({ name: 'skills_id' })
  skill: Skill;
}
