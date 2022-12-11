import { BootcampDetail, Tag } from '.';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bootcamp_detail_tag_map' })
export class BootcampDetailTagMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootcampDetail,
    bootcampDetail => bootcampDetail.bootcampDetailTagMaps,
  )
  @JoinColumn({ name: 'bootcamp_detail_id', referencedColumnName: 'id' })
  bootcampDetail: BootcampDetail;

  @ManyToOne(() => Tag, tag => tag.bootcampDetailTagMaps)
  @JoinColumn({ name: 'tag_id', referencedColumnName: 'id' })
  tags: Tag;
}
