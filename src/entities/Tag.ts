import { Column, Entity, OneToMany } from 'typeorm';
import { BootcampDetailTagMap } from '.';
import { Base } from './Base';

@Entity({ name: 'tag' })
export class Tag extends Base {
  @Column({ type: 'varchar', length: 255 })
  tag: string;

  @OneToMany(
    () => BootcampDetailTagMap,
    BootcampDetailTagMap => BootcampDetailTagMap.bootcampDetail,
  )
  bootcampDetailTagMaps: BootcampDetailTagMap[];
}
