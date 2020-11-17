import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import * as jwt from 'jsonwebtoken';
import { ObjectType } from '@src/types';

@Entity('tp_admin')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column('varchar', {
		nullable: false,
		length: 100,
		name: 'password',
		comment: '密码'
	})
  password: string;

  @Column()
  email: string;

  @Column()
  ugroup: number;

  @Expose()
	private get token() {
		const { id, username, ugroup } = this;
		// 生成签名
		return jwt.sign(
			{
				id,
				username,
				ugroup,
			},
			process.env.SECRET, // 加盐
			{
				expiresIn: '7d', // 过期时间
			},
		);
	}

//   public toResponseObject(isShowToken = true): object {
// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 		console.log('test')
// 		const { password, token, ...params } = this;
// 		const responseData: ObjectType = {
// 			...params,
// 		}
// 		console.log(params,token)
// 		if (isShowToken) {
// 			console.log('test1')
// 			return Object.assign(responseData, { token });
// 		} else {
// 			console.log('test2')
// 			return responseData;
// 		}
// 	}
}
