import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export class AppController {
    getHello(): string {
        return 'hello world';
    }
}