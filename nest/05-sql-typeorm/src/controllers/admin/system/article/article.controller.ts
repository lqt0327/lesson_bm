import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleEntity } from '@src/entities/model/system/article.entity';
import { ArticleService } from '@src/services/article/article.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly ArticleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    return this.ArticleService.create(createArticleDto);
  }

  @Get()
  findAll(): Promise<ArticleEntity[]> {
    return this.ArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ArticleEntity> {
    return this.ArticleService.findOne(id);
  }
}
