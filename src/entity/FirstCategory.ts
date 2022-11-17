import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SecondCategory } from '@entity/SecondCategory';

@Entity({ name: 'first_category' })
export class FirstCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(
    () => SecondCategory,
    secondCategory => secondCategory.firstCategory,
  )
  secondCategory: SecondCategory[];
}
