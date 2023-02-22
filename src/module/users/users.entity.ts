import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BlogSummary } from '../blogSummary/blogSummary.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image: string;

  @OneToMany((type) => BlogSummary, (blogSummary) => blogSummary.author)
  blogSummaries: BlogSummary[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @ManyToMany(() => BlogSummary)
  @JoinTable()
  saved_blog: BlogSummary[];
}
