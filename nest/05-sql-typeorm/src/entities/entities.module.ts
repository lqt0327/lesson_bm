import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/system/user.entity';
import { LinkEntity } from './model/system/link.entity';
import { CommentsEntity } from './model/system/comments.entity';
import { ReplyEntity } from './model/system/reply.entity';
import { ArticleEntity } from './model/system/article.entity';
import { CateEntity } from './model/system/cate.entity'

const entityList = [
    UserEntity,
    LinkEntity,
    CommentsEntity,
    ReplyEntity,
    ArticleEntity,
    CateEntity
]

@Module({
    imports: [
        TypeOrmModule.forFeature(entityList),
    ],
    exports: [
        TypeOrmModule.forFeature(entityList),
    ],
})
export class EntityModule { }