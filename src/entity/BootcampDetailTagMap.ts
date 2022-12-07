import { BootcampDetail } from './BootcampDetail';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './Tag';

@Entity({ name: 'bootcamp_details_tags_map' })
export class BootcampDetailTagMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailTagMap,
  )
  @JoinColumn({ name: 'bootcamp_details_id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Tag, tag => tag.bootcampDetailTagMap)
  @JoinColumn({ name: 'tags_id' })
  tags: Tag;
}
