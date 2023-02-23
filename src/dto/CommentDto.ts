import { BlogDetail } from 'src/module/blogDetail/blogDetail.entity';
import { User } from 'src/module/users/users.entity';

export class CommentDto {
  blogDetail: BlogDetail;
  user: User;
  content: string;
}
