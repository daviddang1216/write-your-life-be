import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetail } from './module/blogDetail/blogDetail.entity';
import { BlogDetailModule } from './module/blogDetail/blogDetail.module';
import { BlogSummary } from './module/blogSummary/blogSummary.entity';
import { BlogSummaryModule } from './module/blogSummary/blogSummary.module';
import { UserModule } from './module/users/user.module';
import { User } from './module/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'mysql',
      database: 'blog-prj-1',
      entities: [User, BlogSummary, BlogDetail],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    BlogSummaryModule,
    BlogDetailModule,
  ],
})
export class AppModule {}
