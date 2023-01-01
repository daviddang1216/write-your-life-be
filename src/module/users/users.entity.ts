import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BlogSummary } from '../blogSummary/blogSummary.entity';

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
}
