import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogDetail } from './blogDetail.entity';
import { DataSource } from 'typeorm';
import { BlogDetailDto } from 'src/dto/BlogDetailDto';
import { BlogSummaryService } from '../blogSummary/blogSummary.service';

@Injectable()
export class BlogDetailService {
  constructor(
    @InjectRepository(BlogDetail)
    private _blogDetailRepository: Repository<BlogDetail>,
    private _dataSource: DataSource,
  ) {}

  findOneById(id: number): Promise<BlogDetail> {
    return this._blogDetailRepository.findOne({
      relations: {
        blogSummary: true,
      },
      where: {
        blogSummary: {
          id,
        },
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this._blogDetailRepository.delete(id);
  }

  addBlogDetail(blogDetail: BlogDetailDto): Promise<BlogDetail> {
    return this._blogDetailRepository.save(blogDetail);
  }

  //   addBlogDetail(blogDetail: BlogDetailDto): Promise<BlogDetailDto | void> {
  //     if (!this._isBlogDetailExist(blogDetail))
  //       return this._blogDetailRepository.save(blogDetail);
  //   }
}
