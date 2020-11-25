import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { CommentsEntity } from '@src/entities/model/system/comments.entity';
import { CommentsService } from '@src/services/comments/comments.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('评论')
@Controller('comments')
export class CommentsController {
  constructor(private readonly CommentsService: CommentsService) {}

  @ApiOperation({ summary: '写评论', description: '写评论'})
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCommentsDto: CreateCommentsDto): Promise<CommentsEntity> {
    return this.CommentsService.create(createCommentsDto);
  }

  @ApiOperation({ summary: '查询评论和回复', description: '根据评论id查询评论和相关回复'})
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findAll(@Param('id') id: string): Promise<CommentsEntity[]> {
    return this.CommentsService.findAll(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<CommentsEntity> {
  //   return this.CommentsService.findOne(id);
  // }
}
