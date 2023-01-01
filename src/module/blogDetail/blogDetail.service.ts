import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogDetail } from './blogDetail.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class BlogDetailService {
  constructor(
    @InjectRepository(BlogDetail)
    private _blogDetailRepository: Repository<BlogDetail>, // private _dataSource: DataSource,
  ) {}

  findOneById(id: number): Promise<BlogDetail> {
    return this._blogDetailRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this._blogDetailRepository.delete(id);
  }

  //   addBlogDetail(blogDetail: BlogDetailDto): Promise<BlogDetailDto | void> {
  //     if (!this._isBlogDetailExist(blogDetail))
  //       return this._blogDetailRepository.save(blogDetail);
  //   }
}
