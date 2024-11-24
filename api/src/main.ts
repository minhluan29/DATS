import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  console.time('App Initialization');
  const app = await NestFactory.create(AppModule);
  console.timeEnd('App Initialization');
  app.enableCors();

  // Serve static files
  app.use(express.static(join(__dirname, '../../admin/build')));
  app.setGlobalPrefix('api');
  app.use((req, res, next) => {
    if (!req.url.startsWith('/api')) {
      res.sendFile(join(__dirname, '../../admin/build/index.html'));
    } else {
      next();
    }
  });

  // Start the server
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log('🚀 ~ port api:', process.env.PORT_API);
}
bootstrap();
