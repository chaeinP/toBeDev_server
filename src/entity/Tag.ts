import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BootcampDetailTagMap } from './BootcampDetailTagMap';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  tag: string;

  @OneToMany(
    () => BootcampDetailTagMap,
    BootcampDetailTagMap => BootcampDetailTagMap.bootcampDetail,
  )
  bootcampDetailTagMap: BootcampDetailTagMap[];
}
