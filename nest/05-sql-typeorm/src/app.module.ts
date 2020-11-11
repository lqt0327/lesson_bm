import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '120.79.55.21',
      port: 3306,
      username: 'root',
      password: 'lqt03271315',
      database: 'mytest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ControllersModule,
  ],
})
export class AppModule {}
