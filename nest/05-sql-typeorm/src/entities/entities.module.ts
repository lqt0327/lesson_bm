import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/system/user.entity';

const entityList = [
    UserEntity
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