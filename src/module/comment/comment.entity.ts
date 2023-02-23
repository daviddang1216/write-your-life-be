import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { BlogDetail } from '../blogDetail/blogDetail.entity';
import { User } from '../users/users.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date; // Creation date

  @Column({ length: 10000 })
  content: string;

  @Column()
  like: number;

  @ManyToOne(() => BlogDetail, (blogDetail) => blogDetail.comments)
  @JoinColumn()
  blogDetail: BlogDetail;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn()
  user: User;
}
