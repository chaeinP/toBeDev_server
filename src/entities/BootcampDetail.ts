import { BootcampDetailSkillMap } from './BootcampDetailSkillMap';
import { Bootcamp } from '.';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootcampDetailTagMap } from '.';

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
export class BootcampDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_title', type: 'varchar', length: 255 })
  productTitle: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ name: 'origin_url', type: 'varchar', length: 255 })
  originUrl: string;

  @Column({ name: 'reg_start_date', type: 'date' })
  regStartDate: Date;

  @Column({ name: 'reg_end_date', type: 'date' })
  regEndDate: Date;

  @Column({ name: 'study_time', type: 'varchar', length: 255 })
  studyTime: string;

  @Column({ name: 'ndays_a_week', type: 'int' })
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

  @Column({ name: 'thumbnail_url', type: 'varchar', length: 255 })
  thumbnailUrl: string;

  @Column({ name: 'ci_url', type: 'varchar', length: 255 })
  ciUrl: string;

  @Column({ name: 'content', type: 'text' })
  content: string;

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

  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.bootcampDetails)
  @JoinColumn({ name: 'bootcamp_id', referencedColumnName: 'id' })
  bootcamp: Bootcamp;

  @OneToMany(
    () => BootcampDetailSkillMap,
    bootcampDetailSkillMap => bootcampDetailSkillMap.bootcampDetail,
  )
  bootcampDetailSkillMaps: BootcampDetailSkillMap[];

  @OneToMany(
    () => BootcampDetailTagMap,
    bootcampDetailTagMap => bootcampDetailTagMap.bootcampDetail,
  )
  bootcampDetailTagMaps: BootcampDetailTagMap[];
}
