import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_admin')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  ugroup: number;
}
