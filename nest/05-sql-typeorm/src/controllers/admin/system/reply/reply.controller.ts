import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ReplyEntity } from '@src/entities/model/system/reply.entity';
import { ReplyService } from '@src/services/reply/reply.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('回复')
@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService) {}

  @ApiOperation({ summary: '回复评论', description: '回复评论'})
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createReplyDto: CreateReplyDto): Promise<ReplyEntity> {
    return this.ReplyService.create(createReplyDto);
  }

  @Get()
  findAll(): Promise<ReplyEntity[]> {
    return this.ReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReplyEntity> {
    return this.ReplyService.findOne(id);
  }
}
