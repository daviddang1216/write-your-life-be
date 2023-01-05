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
} from 'typeorm';
import { BlogSummary } from '../blogSummary/blogSummary.entity';
import { User } from '../users/users.entity';

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
}
