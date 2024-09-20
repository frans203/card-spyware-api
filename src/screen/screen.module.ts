import { Module } from '@nestjs/common';
import { ScreenService } from './screen.service';
import { ScreenController } from './screen.controller';
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {extname, join} from 'path';
import e from "express";
import {formatDateTime} from "@src/utils/date.utils";

const screenshotsDirectory = join(process.cwd(), './screenshots');

@Module({
  imports: [
      MulterModule.register({
        storage: diskStorage({
          destination: (_req, _file, callback) =>  {
              callback(null, screenshotsDirectory);
          },
          filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
            const ext = extname(file.originalname);
            const dateTime = formatDateTime(new Date());
            const filename = `${dateTime}${ext}`;
            callback(null, filename);
          }
        })
      })
  ],
  providers: [ScreenService],
  controllers: [ScreenController]
})
export class ScreenModule {}
