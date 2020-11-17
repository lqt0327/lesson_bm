import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as uuidv4 from 'uuid';
import { isUUID, isEmail, isInt, isMobilePhone } from 'class-validator';

@Injectable()
export class ToolsService {

  public get uuid(): string {
    return uuidv4.v4();
  }

//   makePassword(password: string): string {
//     return this.nodeAuth.makePassword(password);
//   }

  checkPassword(password: string, sqlPassword: string): boolean {
    return Object.is(password, sqlPassword);
  }

  public isUUID(id: string): boolean {
    return isUUID(id);
  }

  public isInt(id: string): boolean {
    return isInt(Number(id));
  }

  public isEmail(str: string): boolean {
    return isEmail(str);
  }

  public isMobilePhone(mobile: string, nation: any = 'zh-CN'): boolean {
    return isMobilePhone(mobile, nation);
  }

  public checkPage(pageSize: number, pageNumber: number): void {
    if (!isInt(Number(pageSize)) || !isInt(Number(pageNumber))) {
      throw new HttpException(`传递的pageSize:${pageSize},pageNumber:${pageNumber}其中一个不是整数`, HttpStatus.OK);
    }
  }

  public async findByIdOrUuid(id: string, repository: any) {
    if (this.isUUID(id)) {
      return await repository.findOne({ uuid: id });
    } else if (this.isInt(id)) {
      return await repository.findOne({ id: Number(id) });
    } else {
      return new HttpException(`你传递的参数错误:${id}不是uuid或者id的一种`, HttpStatus.OK);
    }
  }
}
