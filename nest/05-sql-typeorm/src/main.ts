import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var fs = require('fs');

async function bootstrap() {

  // const httpsOptions = {
  //   key: fs.readFileSync('/Users/luoqintai/Desktop/server.key'),
  //   cert: fs.readFileSync('/Users/luoqintai/Desktop/server.crt'),
  // };

  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions
  // });
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'token, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method.toLowerCase() == 'options') {
      res.send(200)
    }else{
      next();
    }
  });

  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();