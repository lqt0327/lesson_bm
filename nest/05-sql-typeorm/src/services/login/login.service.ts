import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { LoginDto } from '@src/controllers/admin/system/login/dto/login.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ToolsService } from '@src/services/tools/tools.service';
import { UserEntity } from '@src/entities/model/system/user.entity';

@Injectable()
export class LoginService {
  constructor (
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly toolsService: ToolsService,
  ) { }

  async adminLogin(loginDto: LoginDto): Promise<any> {
    try {
      const { username, password } = loginDto;
      const user = await this.userRepository.findOne({where: { username }});
      console.log(user,'+++++');
      if (user && this.toolsService.checkPassword(password, user.password)) {
          console.log(user,'------')
          return Object.assign({"status":200},{"data":user});
        // return user.toResponseObject();
      } else {
        throw new HttpException('请检查你的用户名与密码', HttpStatus.OK);
      }
    } catch (e) {
      Logger.log(e, 'userServiceLogin');
      throw new HttpException('请检查你的用户名与密码', HttpStatus.OK);
    }
  }
}
