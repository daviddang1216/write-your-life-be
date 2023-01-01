import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BlogDetail } from './blogDetail.entity';
import { BlogDetailService } from './blogDetail.service';

@Controller('blog-detail')
export class BlogDetailController {
  constructor(private readonly _blogDetailService: BlogDetailService) {}

  @Get()
  getAllBlogDetail(@Query('id') id: number): Promise<BlogDetail> {
    return this._blogDetailService.findOneById(id);
  }
}
