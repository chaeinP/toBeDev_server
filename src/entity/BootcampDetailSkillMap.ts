import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootcampDetail } from './BootcampDetail';
import { Skill } from './Skill';

@Entity({ name: 'bootcamp_detail_skill_map' })
export class BootcampDetailSkillMap extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailSkillMap,
  )
  @JoinColumn({ name: 'bootcamp_detail_id', referencedColumnName: 'id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Skill, skill => skill.bootcampDetailSkillMap)
  @JoinColumn({ name: 'skill_id', referencedColumnName: 'id' })
  skill: Skill;
}
