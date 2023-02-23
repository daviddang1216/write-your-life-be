import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { User } from '../users/users.entity';

@Entity()
export class BlogSummary {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ length: 100 })
  title: string;

  @Column()
  image: string;

  @Column()
  heart: number;

  @ManyToOne((type) => User, (user) => user.blogSummaries)
  @JoinColumn()
  author: User;

  @ManyToOne((type) => Category, (category) => category.blogSummaries)
  @JoinColumn()
  category: Category;
}
