import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SecondCategory } from '.';

@Entity({ name: 'first_category' })
export class FirstCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(
    () => SecondCategory,
    secondCategory => secondCategory.firstCategory,
    { cascade: true },
  )
  secondCategories: SecondCategory[];
}
