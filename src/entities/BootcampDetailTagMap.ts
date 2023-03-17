import { BootcampDetail, Tag } from '.';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './Base';

@Entity({ name: 'bootcamp_detail_tag_map' })
export class BootcampDetailTagMap extends Base {
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
