import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private _categoryRepository: Repository<Category>,
    private _dataSource: DataSource,
  ) {}

  findAll(): Promise<Category[]> {
    return this._dataSource.query(`
    select * from category
    `);
  }
}
