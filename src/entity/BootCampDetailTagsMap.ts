import { BootCampDetail } from './BootCampDetail';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tags } from './Tags';

@Entity({ name: 'bootcamp_detail_tags_map' })
export class BootCampDetailTagsMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootCampDetail,
    bootCampDetail => bootCampDetail.bootCampDetailTagsMap,
  )
  @JoinColumn({ name: 'bootcamp_id' })
  bootCampDetail: BootCampDetail;

  @ManyToOne(() => Tags, tag => tag.bootCampDetailTagsMap)
  @JoinColumn({ name: 'tag_id' })
  tag: Tags;
}
