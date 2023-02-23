import { Body, Controller, Post } from '@nestjs/common';
import { CommentDto } from 'src/dto/CommentDto';
import { CommentUpdateDto } from 'src/dto/CommentUpdateDto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly _commentService: CommentService) {}

  @Post('add-comment')
  addComment(@Body() comment: CommentDto) {
    return this._commentService.addComment(comment);
  }

  @Post('update-comment')
  updateComment(@Body() comment: CommentUpdateDto) {
    return this._commentService.updateComment(comment);
  }
}
