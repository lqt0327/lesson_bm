import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { CommentsEntity } from '@src/entities/model/system/comments.entity';
import { CommentsService } from '@src/services/comments/comments.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('评论')
@Controller('comments')
export class CommentsController {
  constructor(private readonly CommentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentsDto: CreateCommentsDto): Promise<CommentsEntity> {
    return this.CommentsService.create(createCommentsDto);
  }

  @Get()
  findAll(): Promise<CommentsEntity[]> {
    return this.CommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CommentsEntity> {
    return this.CommentsService.findOne(id);
  }
}
