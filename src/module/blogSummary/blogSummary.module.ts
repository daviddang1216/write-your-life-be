import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogSummaryController } from './blogSummary.controller';
import { BlogSummary } from './blogSummary.entity';
import { BlogSummaryService } from './blogSummary.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogSummary])],
  providers: [BlogSummaryService],
  controllers: [BlogSummaryController],
})
export class BlogSummaryModule {}
