import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCateDto } from '@src/controllers/admin/system/cate/dto/create-cate.dto';
import { CateEntity } from '@src/entities/model/system/cate.entity';

@Injectable()
export class CateService {
  constructor(
    @InjectRepository(CateEntity)
    private readonly cateRepository: Repository<CateEntity>
  ) {}

  create(createCateDto: CreateCateDto): Promise<CateEntity> {
    const cate = new CateEntity();
    cate.catename = createCateDto.catename;

    return this.cateRepository.save(cate);
  }

  async findAll(): Promise<CateEntity[]> {
    return this.cateRepository.find();
  }

  findOne(id: string): Promise<CateEntity> {
    return this.cateRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cateRepository.delete(id);
  }
}
