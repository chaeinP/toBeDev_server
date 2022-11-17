import { BootCampDetailSkillsMap } from './BootCampDetailSkillsMap';
import { BootCamp } from './BootCamp';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootCampDetailTagsMap } from './BootCampDetailTagsMap';

export enum IsOnline {
  offline,
  online,
  mix,
}

export enum Status {
  '모집예정',
  '모집중',
  '모집마감',
}

@Entity({ name: 'bootcamp_detail' })
export class BootCampDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_title', type: 'varchar', length: 255 })
  productTitle: string;

  @Column({ name: 'origin_url', type: 'varchar', length: 255 })
  originUrl: string;

  @Column({ name: 'reg_start_date', type: 'date' })
  regStartDate: Date;

  @Column({ name: 'reg_end_date', type: 'date' })
  regEndDate: Date;

  @Column({ name: 'study_time', type: 'varchar', length: 255 })
  studyTime: string;

  @Column({ name: 'study_time_detail', type: 'varchar', length: 255 })
  studyTimeDetail: string;

  @Column({ name: 'n_days_a_week', type: 'int' })
  nDaysAWeek: number;

  @Column({ name: 'quota', type: 'int' })
  quota: number;

  @Column({ name: 'is_online', type: 'enum', enum: IsOnline })
  isOnline: IsOnline;

  @Column({ name: 'location', type: 'varchar' })
  location: string;

  @Column({ name: 'tuition', type: 'int' })
  tuition: number;

  @Column({ name: 'contact', type: 'varchar', length: '255' })
  contact: string;

  @Column({ name: 'views', type: 'int' })
  views: number;

  @Column({ name: 'thumbnail', type: 'varchar', length: 255 })
  thumbnail: string;

  @Column({ name: 'contents', type: 'text' })
  contents: string;

  @Column({ type: 'text' })
  curriculumn: string;

  @Column({ type: 'int' })
  nth: number;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @Column({ name: 'start_date', type: 'date' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date' })
  endDate: Date;

  @Column({ type: 'int' })
  period: number;

  @ManyToOne(() => BootCamp, bootCamp => bootCamp.bootCampDetail)
  @JoinColumn({ name: 'bootcamp_id' })
  bootCamp: BootCamp;

  @OneToMany(
    () => BootCampDetailSkillsMap,
    bootCampDetailSkillsMap => bootCampDetailSkillsMap.bootCampDetail,
  )
  bootCampDetailSkillsMap: BootCampDetailSkillsMap[];

  @OneToMany(
    () => BootCampDetailTagsMap,
    bootCampDetailTagsMap => bootCampDetailTagsMap.bootCampDetail,
  )
  bootCampDetailTagsMap: BootCampDetailTagsMap[];
}
