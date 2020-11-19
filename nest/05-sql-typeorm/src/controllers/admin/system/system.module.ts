import { Module } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'
import { LinksController} from './links/links.controller'
import { LoginController } from './login/login.controller'
import { CommentsController } from './comments/comments.controller'
import { ReplyController } from './reply/reply.controller'

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    UsersController,
    LinksController,
    LoginController,
    CommentsController,
    ReplyController
  ],
})
export class SystemModule { }