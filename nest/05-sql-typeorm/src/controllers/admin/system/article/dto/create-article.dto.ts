import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArticleDto {
    @ApiProperty({ required: true, description: '文章标题' })
    @IsString({ message: '标题必须为字符类型' })
    @IsNotEmpty({ message: '标题不能为空' })
    readonly title: string;

    @ApiProperty({ required: false, description: '作者名' })
    @IsString({ message: '作者名必须为字符类型' })
    @IsOptional()
    readonly author?: string;
    
    @ApiProperty({ required: true, description: '文章内容' })
    @IsNotEmpty({ message: '文章内容不能为空' })
    readonly content: string;
    
    @ApiProperty({ required: false, description: '文章标签' })
    @IsString({ message: '标签必须为字符类型' })
    @IsOptional()
    readonly keywords?: string;

    @ApiProperty({ required: false, description: '文章类别'})
    @IsOptional()
    readonly cateid?: number;
}