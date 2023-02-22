import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BlogDetail } from '../blogDetail/blogDetail.entity';
import { BlogSummary } from '../blogSummary/blogSummary.entity';
import { User } from '../users/users.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BlogSummary, (blogSummary) => blogSummary.category)
  blogSummaries: BlogSummary[];
}
