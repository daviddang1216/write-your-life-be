import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogSummary } from './blogSummary.entity';
import { DataSource } from 'typeorm';
import { BlogSummaryDto } from 'src/dto/BlogSummaryDto';

@Injectable()
export class BlogSummaryService {
  constructor(
    @InjectRepository(BlogSummary)
    private _blogSummaryRepository: Repository<BlogSummary>,
    private _dataSource: DataSource,
  ) {}

  findAll(): Promise<BlogSummary[]> {
    return this._dataSource
      .getRepository(BlogSummary)
      .createQueryBuilder('blogSummary')
      .innerJoinAndSelect('blogSummary.author', 'author')
      .getMany();
  }

  findOne(id: number): Promise<BlogSummary> {
    return this._blogSummaryRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this._blogSummaryRepository.delete(id);
  }

  //   addBlogSummary(blogSummary: BlogSummaryDto): Promise<BlogSummaryDto | void> {
  //     if (!this._isBlogSummaryExist(blogSummary))
  //       return this._blogSummaryRepository.save(blogSummary);
  //   }
}
