import { Module } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    UsersController
  ],
})
export class SystemModule { }