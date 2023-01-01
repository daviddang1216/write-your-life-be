import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetailController } from './blogDetail.controller';
import { BlogDetail } from './blogDetail.entity';
import { BlogDetailService } from './blogDetail.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogDetail])],
  providers: [BlogDetailService],
  controllers: [BlogDetailController],
})
export class BlogDetailModule {}
