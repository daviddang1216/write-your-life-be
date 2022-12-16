import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
