import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BootCampDetail } from './BootCampDetail';
import { Skills } from './Skills';

@Entity({ name: 'bootcamp_detail_skills_map' })
export class BootCampDetailSkillsMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootCampDetail,
    bootCampDetail => bootCampDetail.bootCampDetailSkillsMap,
  )
  @JoinColumn({ name: 'bootcamp_id' })
  bootCampDetail: BootCampDetail;

  @ManyToOne(() => Skills, skill => skill.bootCampDetailSkillsMap)
  @JoinColumn({ name: 'skill_id' })
  skill: Skills;
}
