import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCateDto } from './dto/create-cate.dto';
import { CateEntity } from '@src/entities/model/system/cate.entity';
import { CateService } from '@src/services/cate/cate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('文章类别')
@Controller('cate')
export class CateController {
  constructor(private readonly CateService: CateService) {}

  @Post()
  create(@Body() createCateDto: CreateCateDto): Promise<CateEntity> {
    return this.CateService.create(createCateDto);
  }

  @Get()
  findAll(): Promise<CateEntity[]> {
    return this.CateService.findAll();
  }

  @Get(':id')
  cateList(@Param('id') id: string): Promise<CateEntity> {
    return this.CateService.cateList(id);
  }
}
