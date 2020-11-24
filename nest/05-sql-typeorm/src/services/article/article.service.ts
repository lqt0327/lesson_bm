import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { CreateArticleDto } from '@src/controllers/admin/system/article/dto/create-article.dto';
import { UpdateArticleDto } from '@src/controllers/admin/system/article/dto/update-article.dto';
import { ArticleEntity } from '@src/entities/model/system/article.entity';
import { ObjectType } from '@src/types';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  create(createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    const article = new ArticleEntity();
    article.title = createArticleDto.title;
    article.author = createArticleDto.author;
    article.content = createArticleDto.content;
    article.time = Date.now() / 1000 | 0;
    article.keywords = createArticleDto.keywords;
    article.cateid = createArticleDto.cateid;
    return this.articleRepository.save(article);
  }

  async articleList(queryOption: ObjectType): Promise<ArticleEntity[]> {
    const {page=1,pageSize=10} = queryOption
    return this.articleRepository.find({
      order:{time:"DESC"},
      skip:(page-1)*pageSize,
      take:pageSize
    });
  }

  async updateById(id: string, data: UpdateArticleDto): Promise<any> {
    try{
      const { title, content, cateid } = data;
      const time = Date.now() / 1000 | 0;
      const entityManager = getManager();
      const article = await entityManager.findOne(ArticleEntity,id);
      article.title = title;
      article.content = content;
      article.time = time;
      article.cateid = cateid;
      await entityManager.save(article);
    }catch(e) {
      throw new HttpException('修改失败', HttpStatus.OK);
    }
  }

  findOne(id: string): Promise<ArticleEntity> {
    return this.articleRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articleRepository.delete(id);
  }
}
