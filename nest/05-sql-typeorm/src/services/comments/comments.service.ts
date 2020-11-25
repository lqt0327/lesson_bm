import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentsDto } from '@src/controllers/admin/system/comments/dto/create-comments.dto';
import { CommentsEntity } from '@src/entities/model/system/comments.entity';
import { ReplyEntity } from '@src/entities/model/system/reply.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
    @InjectRepository(ReplyEntity)
    private readonly replyRepository: Repository<ReplyEntity>,
  ) {}

  create(createCommentsDto: CreateCommentsDto): Promise<CommentsEntity> {
    const comments = new CommentsEntity();
    comments.post_id = createCommentsDto.post_id;
    comments.author = createCommentsDto.author;
    comments.content = createCommentsDto.content;
    comments.time = createCommentsDto.time;

    return this.commentsRepository.save(comments);
  }

  async findAll(id: string): Promise<CommentsEntity[]> {
    let res = [];
    let obj = await this.commentsRepository.find({where:{post_id: id}})
    for(let v of obj) {
        let tmp = await this.replyRepository.createQueryBuilder('tp_reply')
            .where('parent=' + v.id)
            .getMany()
        if(tmp) {
            res.push(Object.assign(v,{"child":tmp}))
        }else {
            res.push(v);
        }
    }
    return res;
  }

  findOne(id: string): Promise<CommentsEntity> {
    return this.commentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
