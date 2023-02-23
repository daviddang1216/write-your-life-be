import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentDto } from 'src/dto/CommentDto';
import { CommentUpdateDto } from 'src/dto/CommentUpdateDto';
import { DataSource, Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private _commentRepository: Repository<Comment>,
    private _dataSource: DataSource,
  ) {}

  addComment(comment: CommentDto): Promise<Comment> {
    const { blogDetail, user, content } = comment;
    return this._commentRepository.save({
      blogDetail,
      user,
      content,
      like: 0,
    });
  }

  async updateComment(comment: CommentUpdateDto): Promise<Comment> {
    return this._commentRepository.save({
      ...comment,
    });
  }
}
