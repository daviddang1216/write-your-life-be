import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
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

  @ManyToOne((type) => User, (user) => user.blogSummaries)
  @JoinColumn()
  author: User;
}
