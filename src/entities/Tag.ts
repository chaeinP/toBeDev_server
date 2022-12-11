import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BootcampDetailTagMap } from '.';

@Entity({ name: 'tag' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  tag: string;

  @OneToMany(
    () => BootcampDetailTagMap,
    BootcampDetailTagMap => BootcampDetailTagMap.bootcampDetail,
  )
  bootcampDetailTagMaps: BootcampDetailTagMap[];
}
