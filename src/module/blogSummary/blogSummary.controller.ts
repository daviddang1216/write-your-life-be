import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BlogSummary } from './blogSummary.entity';
import { BlogSummaryService } from './blogSummary.service';

@Controller('blog-summary')
export class BlogSummaryController {
  constructor(private readonly _blogSummaryService: BlogSummaryService) {}

  @Get()
  getAllBlogSummary(): Promise<BlogSummary[]> {
    return this._blogSummaryService.findAll();
  }
}
