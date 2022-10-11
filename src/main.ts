import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000/api/products'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders:
      'Content-Type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Credentials',
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
