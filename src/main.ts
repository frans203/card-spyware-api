import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join }  from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const uploadScreenDir = join(process.cwd(), './screenshots');
  const logKeysDir = join(process.cwd(), './keys');

  if(!fs.existsSync(uploadScreenDir)) {
    fs.mkdirSync(uploadScreenDir, { recursive:true });
  }

  if(!fs.existsSync(logKeysDir)) {
    fs.mkdirSync(logKeysDir, {recursive: true});
  }
  app.enableCors();
  await app.listen(3010);
}
bootstrap();
