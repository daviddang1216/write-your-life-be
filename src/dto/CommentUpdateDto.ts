import { BlogDetail } from 'src/module/blogDetail/blogDetail.entity';
import { User } from 'src/module/users/users.entity';

export class CommentUpdateDto {
  blogDetail: BlogDetail;
  user: User;
  content: string;
  id: number;
  like: number;
}
