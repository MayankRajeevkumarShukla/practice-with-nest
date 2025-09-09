import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('greet')
  getGreetings(): string {
    return 'Hello from nestjs get';
  }
  @Post('add')
  getSum(): number {
    return 2 + 2;
  }
}
