import { Module } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'
import { LinksController} from './links/links.controller'

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    UsersController,
    LinksController,
  ],
})
export class SystemModule { }