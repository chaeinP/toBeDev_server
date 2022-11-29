import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BootCampDetailsTagsMap } from './BootCampDetailsTagsMap';

@Entity({ name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(
    () => BootCampDetailsTagsMap,
    BootCampDetailsTagsMap => BootCampDetailsTagsMap.bootCampDetails,
  )
  bootCampDetailsTagsMap: BootCampDetailsTagsMap[];
}
