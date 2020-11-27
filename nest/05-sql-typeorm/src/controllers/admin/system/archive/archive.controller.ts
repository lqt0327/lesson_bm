import { CacheInterceptor, Controller, Get, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { ArticleEntity } from '@src/entities/model/system/article.entity';
import { ArticleService } from '@src/services/article/article.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('文章')
@Controller('archive')
@UseInterceptors(CacheInterceptor)
export class ArchiveController {
    constructor(private readonly articleService: ArticleService) { }

    @ApiOperation({ summary: '获取归档信息', description: '归档信息' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async archive(): Promise<ArticleEntity[]> {
        return await this.articleService.archive();
    }
}
