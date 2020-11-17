import { Module } from '@nestjs/common'
import { EntityModule } from '@src/entities/entities.module'
import { ToolsService } from './tools/tools.service'
import { UsersService } from './users/users.service'
import { LinkService } from './links/links.service'
import { LoginService } from './login/login.service'

const serviceList = [
    UsersService,
    LinkService,
    LoginService,
    ToolsService
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