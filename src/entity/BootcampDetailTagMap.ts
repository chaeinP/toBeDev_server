import { BootcampDetail } from './BootcampDetail';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './Tag';

@Entity({ name: 'bootcamp_detail_tag_map' })
export class BootcampDetailTagMap extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailTagMap,
  )
  @JoinColumn({ name: 'bootcamp_detail_id', referencedColumnName: 'id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Tag, tag => tag.bootcampDetailTagMap)
  @JoinColumn({ name: 'tag_id', referencedColumnName: 'id' })
  tags: Tag;
}
