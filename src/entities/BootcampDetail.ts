import { BootcampDetailSkillMap } from './BootcampDetailSkillMap';
import { Bootcamp } from '.';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BootcampDetailTagMap } from '.';
import { Base } from './Base';

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
export class BootcampDetail extends Base {
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

  @Column({ name: 'study_time', type: 'varchar', length: 255, nullable: true })
  studyTime?: string;

  @Column({ name: 'ndays_a_week', type: 'int', nullable: true })
  nDaysAWeek?: number;

  @Column({ name: 'quota', type: 'int', nullable: true })
  quota?: number;

  @Column({ name: 'is_online', type: 'enum', enum: IsOnline, nullable: true })
  isOnline?: IsOnline;

  @Column({ name: 'location', type: 'varchar', nullable: true })
  location?: string;

  @Column({ name: 'tuition', type: 'int', nullable: true })
  tuition?: number;

  @Column({ name: 'contact', type: 'varchar', length: '255', nullable: true })
  contact?: string;

  @Column({ name: 'views', type: 'int', nullable: true })
  views?: number;

  @Column({
    name: 'thumbnail_url',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  thumbnailUrl?: string;

  @Column({ name: 'ci_url', type: 'varchar', length: 255, nullable: true })
  ciUrl?: string;

  @Column({ name: 'content', type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'text', nullable: true })
  curriculumn?: string;

  @Column({ type: 'int', nullable: true })
  nth?: number;

  @Column({ type: 'enum', enum: Status, nullable: true })
  status?: Status;

  @Column({ name: 'start_date', type: 'date', nullable: true })
  startDate?: Date;

  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate?: Date;

  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.bootcampDetails)
  @JoinColumn({ name: 'bootcamp_id', referencedColumnName: 'id' })
  bootcamp: Bootcamp;

  @OneToMany(
    () => BootcampDetailSkillMap,
    bootcampDetailSkillMap => bootcampDetailSkillMap.bootcampDetail,
    { cascade: true },
  )
  bootcampDetailSkillMaps: BootcampDetailSkillMap[];

  @OneToMany(
    () => BootcampDetailTagMap,
    bootcampDetailTagMap => bootcampDetailTagMap.bootcampDetail,
    { cascade: true },
  )
  bootcampDetailTagMaps: BootcampDetailTagMap[];
}
