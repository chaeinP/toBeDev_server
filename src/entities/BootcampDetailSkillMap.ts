import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BootcampDetail, Skill } from '.';

@Entity({ name: 'bootcamp_detail_skill_map' })
export class BootcampDetailSkillMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailSkillMaps,
  )
  @JoinColumn({ name: 'bootcamp_detail_id', referencedColumnName: 'id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Skill, skill => skill.bootcampDetailSkillMaps)
  @JoinColumn({ name: 'skill_id', referencedColumnName: 'id' })
  skill: Skill;
}
