import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScreenModule } from './screen/screen.module';

@Module({
  imports: [ScreenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
