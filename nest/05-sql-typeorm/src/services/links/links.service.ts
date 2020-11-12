import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkDto } from '@src/controllers/admin/system/links/dto/create-links.dto';
import { LinkEntity } from '@src/entities/model/system/link.entity';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(LinkEntity)
    private readonly linksRepository: Repository<LinkEntity>,
  ) {}

  create(createLinkDto: CreateLinkDto): Promise<LinkEntity> {
    const links = new LinkEntity();
    links.title = createLinkDto.title;
    links.url = createLinkDto.url;
    links.desc = createLinkDto.desc;

    return this.linksRepository.save(links);
  }

  async findAll(): Promise<LinkEntity[]> {
    return this.linksRepository.find();
  }

  findOne(id: string): Promise<LinkEntity> {
    return this.linksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.linksRepository.delete(id);
  }
}
