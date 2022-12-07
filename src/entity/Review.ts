import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SecondCategory } from '@entity/SecondCategory';
import { Bootcamp } from './Bootcamp';

@Entity({ name: 'reviews' })
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  origin_url: string;

  @ManyToOne(() => Bootcamp, bootcamp => bootcamp.review)
  @JoinColumn({ name: 'bootcamp_id' })
  bootcamp: Bootcamp;
}
