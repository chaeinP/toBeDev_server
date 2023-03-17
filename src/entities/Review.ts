import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Bootcamp } from '.';
import { Base } from './Base';

@Entity({ name: 'review' })
export class Review extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  origin_url: string;

  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.reviews)
  @JoinColumn({ name: 'bootcamp_id', referencedColumnName: 'id' })
  bootcamp: Bootcamp;
}
