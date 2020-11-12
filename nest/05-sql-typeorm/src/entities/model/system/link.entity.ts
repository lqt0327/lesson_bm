import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_links')
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  desc: string;
}
