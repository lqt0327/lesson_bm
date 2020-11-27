import { Module, CacheModule } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'
import { LinksController} from './links/links.controller'
import { LoginController } from './login/login.controller'
import { CommentsController } from './comments/comments.controller'
import { ReplyController } from './reply/reply.controller'
import { ArticleController } from './article/article.controller'
import { CateController } from './cate/cate.controller'
import { ArchiveController } from './archive/archive.controller';

@Module({
  imports: [
    CacheModule.register(),
    ServicesModule,
  ],
  controllers: [
    UsersController,
    LinksController,
    LoginController,
    CommentsController,
    ReplyController,
    ArticleController,
    CateController,
    ArchiveController
  ],
})
export class SystemModule { }