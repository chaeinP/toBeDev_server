import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BootCampDetailTagsMap } from './BootCampDetailTagsMap';

@Entity({ name: 'tags' })
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(
    () => BootCampDetailTagsMap,
    BootCampDetailTagsMap => BootCampDetailTagsMap.bootCampDetail,
  )
  bootCampDetailTagsMap: BootCampDetailTagsMap[];
}
