import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BootCampDetails } from './BootCampDetails';
import { Skills } from './Skills';

@Entity({ name: 'bootcamp_details_skills_map' })
export class BootCampDetailsSkillsMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootCampDetails,
    bootCampDetails => bootCampDetails.bootCampDetailSkillsMap,
  )
  @JoinColumn({ name: 'bootcamp_id' })
  bootCampDetails: BootCampDetails;

  @ManyToOne(() => Skills, skill => skill.bootCampDetailSkillsMap)
  @JoinColumn({ name: 'skill_id' })
  skill: Skills;
}
