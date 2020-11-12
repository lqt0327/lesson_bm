import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-links.dto';
import { LinkEntity } from '@src/entities/model/system/link.entity';
import { LinkService } from '@src/services/links/links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinkService) {}

  @Post()
  create(@Body() createLinkDto: CreateLinkDto): Promise<LinkEntity> {
    return this.linksService.create(createLinkDto);
  }

  @Get()
  findAll(): Promise<LinkEntity[]> {
    return this.linksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LinkEntity> {
    return this.linksService.findOne(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(id);
  // }
}
