import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateCateDto } from '@src/controllers/admin/system/cate/dto/create-cate.dto';
import { CateEntity } from '@src/entities/model/system/cate.entity';
import { ArticleEntity } from '@src/entities/model/system/article.entity'

@Injectable()
export class CateService {
  constructor(
    @InjectRepository(CateEntity)
    private readonly cateRepository: Repository<CateEntity>,
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  create(createCateDto: CreateCateDto): Promise<CateEntity> {
    const cate = new CateEntity();
    cate.catename = createCateDto.catename;

    return this.cateRepository.save(cate);
  }

  async findAll(): Promise<CateEntity[]> {
    return await this.cateRepository.find();
  }

  async cateList(id: string): Promise<any> {
    const cateList = await getConnection().createQueryBuilder(CateEntity,'c')
      .innerJoin(ArticleEntity, 'a', 'a.cateid=c.id')
      .select(['a.id','a.time','a.title','c.catename'])
      .where('a.cateid=:id',{id})
      .getRawMany()
    return cateList;
  }

  async remove(id: string): Promise<void> {
    await this.cateRepository.delete(id);
  }
}
