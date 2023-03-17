import { Column, Entity, OneToMany } from 'typeorm';
import { SecondCategory } from '.';
import { Base } from './Base';

@Entity({ name: 'first_category' })
export class FirstCategory extends Base {
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @OneToMany(
    () => SecondCategory,
    secondCategory => secondCategory.firstCategory,
    { cascade: true },
  )
  secondCategories: SecondCategory[];
}
