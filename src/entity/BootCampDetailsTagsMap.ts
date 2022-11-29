import { BootCampDetails } from './BootCampDetails';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tags } from './Tags';

@Entity({ name: 'bootcamp_details_tags_map' })
export class BootCampDetailsTagsMap {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => BootCampDetails,
    bootCampDetails => bootCampDetails.bootCampDetailsTagsMap,
  )
  @JoinColumn({ name: 'bootcamp_id' })
  bootCampDetails: BootCampDetails;

  @ManyToOne(() => Tags, tags => tags.bootCampDetailsTagsMap)
  @JoinColumn({ name: 'tag_id' })
  tags: Tags;
}
