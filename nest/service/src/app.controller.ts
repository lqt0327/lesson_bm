import { Controller, Get, Post, HttpCode, Header } from '@nestjs/common';
import { AppService } from './app.service';

// url 的路径配置 
// http://localhost:3000/app/api/v1
// http://localhost:3000/app/api/v2
@Controller('app/api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('v3')
  // @HttpCode(304)
  @Header('Cache-Control', 'no-cache')
  @Header('Expires',(new Date(Date.now()+10*1000)).toUTCString())
  create(): string {
    return 'This action adds a new cat';
  }
  @Get('v1')
  @Header('Cache-Control', 'no-cache')
  @Header('ETag',null)
  @Header('last-modified',(new Date(Date.now()+10*1000)).toUTCString())
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('v2')
  findAll(): string {
    return 'This action returns all cats';
  }
}
