import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  TableForeignKey,
  Index,
  OneToMany,
} from 'typeorm';
import { BlogSummary } from '../blogSummary/blogSummary.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class BlogDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({
    length: 10000,
  })
  content: string;

  @OneToOne(() => BlogSummary)
  @JoinColumn()
  blogSummary: BlogSummary;

  @OneToMany(() => Comment, (comment) => comment.blogDetail)
  comments: Comment[];
}
