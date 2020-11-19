import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_comments_1')
export class CommentsEntity {
  @PrimaryGeneratedColumn({
      type:'mediumint',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('mediumint',{
      nullable:false,
      default:() => 0,
      name: 'post_id',
      comment: '文章id'
  })
  post_id: number;

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
      comment: '评论内容'
  })
  content: string;

  @Column('mediumint',{
      nullable: false,
      name: 'parent',
      comment: '父级id'
  })
  parent: number;
}
