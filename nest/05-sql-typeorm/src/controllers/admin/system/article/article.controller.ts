import { Body, CacheInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleEntity } from '@src/entities/model/system/article.entity';
import { ArticleService } from '@src/services/article/article.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ObjectType } from '@src/types';
import { UpdateArticleDto } from './dto/update-article.dto';

@ApiTags('文章')
@Controller('article')
@UseInterceptors(CacheInterceptor)
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({ summary: '创建文章', description: '写文章'})
  @ApiCreatedResponse({
    type: CreateArticleDto,
    description: '创建文章DTO'
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createArticleDto: CreateArticleDto): Promise<ArticleEntity> {
    return await this.articleService.create(createArticleDto);
  }

  @ApiOperation({ summary: '文章列表', description: '获取文章列表'})
  @Get()
  @HttpCode(HttpStatus.OK)
  async articleList(
    @Query() queryOption: ObjectType
  ): Promise<ArticleEntity[]> {
    return await this.articleService.articleList(queryOption);
  }

  @ApiOperation({ summary: '获取文章信息', description: '根据id查询文章信息' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<ArticleEntity> {
    return await this.articleService.findOne(id);
  }

  @ApiOperation({ summary: '更新文章', description: '根据id更新文章'})
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id') id: string,
    @Body() data: UpdateArticleDto
  ): Promise<any> {
    return await this.articleService.updateById(id, data);
  }

  @ApiOperation({ summary: '删除文章', description: '根据文章id删除文章'})
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(
    @Param('id') id: string
  ): Promise<any>{
    return await this.articleService.remove(id);
  }
}
