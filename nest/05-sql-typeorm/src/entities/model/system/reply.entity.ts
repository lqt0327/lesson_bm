import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_reply')
export class ReplyEntity {
  @PrimaryGeneratedColumn({
      type:'mediumint',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('mediumint',{
      nullable:false,
      default:() => 0,
      name: 'last_id',
      comment: '评论id'
  })
  last_id: number;

  @Column('tinytext',{
      nullable:false,
      name: 'author',
      comment: '作者'
  })
  author: string;

  @Column('int',{
      nullable:false,
      name:'time',
      comment: '时间'
  })
  time: number;

  @Column('text',{
      nullable:false,
      name: 'content',
      comment: '回复内容'
  })
  content: string;

  @Column('mediumint',{
      nullable: false,
      name: 'parent',
      comment: '父级id'
  })
  parent: number;
}
