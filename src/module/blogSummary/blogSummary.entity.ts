import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class BlogSummary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @ManyToOne((type) => User, (user) => user.blogSummaries) author: User;
}
