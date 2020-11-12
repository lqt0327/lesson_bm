import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/system/user.entity';
import { LinkEntity } from './model/system/link.entity';

const entityList = [
    UserEntity,
    LinkEntity
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