import { from } from "rxjs";
import { Module } from '@nestjs/common'
import { EntityModule } from '@src/entities/entities.module'
import { UsersService } from './users/users.service'
import { LinkService } from './links/links.service'

const serviceList = [
    UsersService,
    LinkService
]

@Module({
    imports: [
        EntityModule,
    ],
    providers: [
        ...serviceList
    ],
    exports: [
        ...serviceList
    ]
})
export class ServicesModule { }