import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ReplyEntity } from '@src/entities/model/system/reply.entity';
import { ReplyService } from '@src/services/reply/reply.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('回复')
@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService) {}

  @Post()
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
