import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity('tp_admin')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Exclude()
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
