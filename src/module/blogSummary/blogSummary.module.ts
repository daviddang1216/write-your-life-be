import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetailModule } from '../blogDetail/blogDetail.module';
import { BlogSummaryController } from './blogSummary.controller';
import { BlogSummary } from './blogSummary.entity';
import { BlogSummaryService } from './blogSummary.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogSummary]), BlogDetailModule],
  providers: [BlogSummaryService],
  controllers: [BlogSummaryController],
})
export class BlogSummaryModule {}
