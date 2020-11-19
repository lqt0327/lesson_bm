import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReplyDto } from '@src/controllers/admin/system/reply/dto/create-reply.dto';
import { ReplyEntity } from '@src/entities/model/system/reply.entity';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(ReplyEntity)
    private readonly replyRepository: Repository<ReplyEntity>,
  ) {}

  create(createReplyDto: CreateReplyDto): Promise<ReplyEntity> {
    const reply = new ReplyEntity();
    reply.last_id = createReplyDto.last_id;
    reply.author = createReplyDto.author;
    reply.content = createReplyDto.content;
    reply.time = createReplyDto.time;
    reply.parent = createReplyDto.parent;

    return this.replyRepository.save(reply);
  }

  async findAll(): Promise<ReplyEntity[]> {
    // let obj = await this.replyRepository.find({where:{parent: 0}})
    // let obj2 = await this.replyRepository.createQueryBuilder('tp_comments_1')
    //     .where('parent!=0')
    //     .getMany();
    // console.log(obj2,'______')
    return this.replyRepository.find();
  }

  findOne(id: string): Promise<ReplyEntity> {
    return this.replyRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.replyRepository.delete(id);
  }
}
