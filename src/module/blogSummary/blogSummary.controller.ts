import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BlogDto } from 'src/dto/BlogDto';
import CategoryEnum from 'src/enum/CategoryEnum';
import { BlogSummary } from './blogSummary.entity';
import { BlogSummaryService } from './blogSummary.service';

@Controller('blog-summary')
export class BlogSummaryController {
  constructor(private readonly _blogSummaryService: BlogSummaryService) {}

  @Get()
  getAllBlogSummary(): Promise<BlogSummary[]> {
    return this._blogSummaryService.findAll();
  }

  @Post('add-blog')
  addBlog(@Body() blog: BlogDto) {
    return this._blogSummaryService.addBlog(blog);
  }

  @Get('search')
  getBySearchTerm(@Query('searchTerm') searchTerm: string): Promise<any> {
    return this._blogSummaryService.findByFullTextSearch(searchTerm);
  }

  @Get('get-by-category')
  getByCategory(@Query('category') category: CategoryEnum): Promise<any> {
    return this._blogSummaryService.findByCategory(category);
  }
}
