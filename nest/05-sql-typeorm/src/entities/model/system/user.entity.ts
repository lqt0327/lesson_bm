import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
