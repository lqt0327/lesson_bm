import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateArticleDto {
    @ApiPropertyOptional({ required: false, description: '文章标题' })
    @IsOptional()
    readonly title?: string;
  
    @ApiPropertyOptional({ required: false, description: '文章内容' })
    @IsOptional()
    readonly content?: string;

    @ApiPropertyOptional({ required:false, description: '文章类别'})
    @IsOptional()
    readonly cateid?: number;
}