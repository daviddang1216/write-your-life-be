import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogSummary } from './blogSummary.entity';
import { DataSource } from 'typeorm';
import { BlogSummaryDto } from 'src/dto/BlogSummaryDto';
import { BlogDetailService } from '../blogDetail/blogDetail.service';
import { BlogDto } from 'src/dto/BlogDto';

@Injectable()
export class BlogSummaryService {
  constructor(
    @InjectRepository(BlogSummary)
    private _blogSummaryRepository: Repository<BlogSummary>,
    private _dataSource: DataSource,
    private readonly _blogDetailService: BlogDetailService,
  ) {}

  findAll(): Promise<BlogSummary[]> {
    return this._dataSource
      .query(`SELECT bs.*, u.image as authorImage, u.name as authorName from blog_summary bs 
      inner join user u on bs.authorId = u.id`);
  }

  findByFullTextSearch(searchTerm: string): Promise<BlogSummary[]> {
    return this._dataSource.query(
      `SELECT bs.*, u.image as authorImage, u.name as authorName from blog_summary bs 
      inner join user u on bs.authorId = u.id
      inner join blog_detail bd on bs.id = bd.blogSummaryId
        and MATCH(bd.content) against('${searchTerm}*' IN BOOLEAN MODE);`,
    );
  }

  findOne(id: number): Promise<BlogSummary> {
    return this._blogSummaryRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this._blogSummaryRepository.delete(id);
  }

  async addBlog(blog: BlogDto): Promise<void> {
    const { title, image, author, content } = blog;
    console.log(author);
    const blogSummary = await this._blogSummaryRepository.save({
      title,
      image,
      author,
    });
    await this._blogDetailService.addBlogDetail({
      content,
      blogSummary,
    });
  }
  //   addBlogSummary(blogSummary: BlogSummaryDto): Promise<BlogSummaryDto | void> {
  //     if (!this._isBlogSummaryExist(blogSummary))
  //       return this._blogSummaryRepository.save(blogSummary);
  //   }
}
