import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tp_article_1')
export class ArticleEntity {
  @PrimaryGeneratedColumn({
      type:'mediumint',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('varchar',{
      nullable:false,
      length:60,
      name: 'title',
      comment: '文章标题'
  })
  title: string;

  @Column('varchar',{
    nullable:true,
    length:30,
    name: 'author',
    comment: '作者'
  })
  author: string;

  @Column('varchar',{
    nullable:true,
    length:255,
    name: 'keywords',
    comment: '关键词'
  })
  keywords: string;

  @Column('text',{
      nullable:false,
      name: 'content',
      comment: '文章内容'
  })
  content: string;

  @Column('int',{
      nullable:false,
      name:'time',
      comment: '时间'
  })
  time: number;
}
