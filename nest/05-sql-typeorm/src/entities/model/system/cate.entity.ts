import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_cate_1')
export class CateEntity {
  @PrimaryGeneratedColumn({
      type:'mediumint',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('varchar',{
      nullable:false,
      length:30,
      name: 'catename',
      comment: '文章类别'
  })
  catename: string;
}
