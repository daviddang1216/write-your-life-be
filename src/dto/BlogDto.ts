import { User } from 'src/module/users/users.entity';

export class BlogDto {
  title: string;
  image: string;
  author: User;
  content: string;
}
