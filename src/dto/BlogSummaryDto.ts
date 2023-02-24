import { Category } from 'src/module/category/category.entity';

export class BlogSummaryDto {
  title: string;
  image: string;
  authorId: number;
  category: Category;
  heart: number;
  id: number;
}
