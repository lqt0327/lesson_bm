import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from '@src/controllers/admin/system/article/dto/create-article.dto';
import { ArticleEntity } from '@src/entities/model/system/article.entity';

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
    article.time = createArticleDto.time;
    article.keywords = createArticleDto.keywords;

    return this.articleRepository.save(article);
  }

  async findAll(): Promise<ArticleEntity[]> {
    return this.articleRepository.find();
  }

  findOne(id: string): Promise<ArticleEntity> {
    return this.articleRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articleRepository.delete(id);
  }
}
