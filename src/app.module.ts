import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetail } from './module/blogDetail/blogDetail.entity';
import { BlogDetailModule } from './module/blogDetail/blogDetail.module';
import { BlogSummary } from './module/blogSummary/blogSummary.entity';
import { BlogSummaryModule } from './module/blogSummary/blogSummary.module';
import { UserModule } from './module/users/user.module';
import { User } from './module/users/users.entity';
import { Comment } from './module/comment/comment.entity';
import { CommentModule } from './module/comment/comment.module';
import { Category } from './module/category/category.entity';
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mypassword',
      database: 'blog-project-1',
      entities: [User, BlogSummary, BlogDetail, Comment, Category],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    BlogSummaryModule,
    BlogDetailModule,
    CommentModule,
    CategoryModule,
  ],
})
export class AppModule {}
