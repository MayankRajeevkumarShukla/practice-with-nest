import { Controller, Get, Post, Param, Body } from '@nestjs/common';
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
  @Post('add/:a/:b')
  getSums(@Param('a') a: string, @Param('b') b: string): number {
    return Number(a) + Number(b);
  }
  @Post('multiply')
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
          a: { type: 'array', items: { type: 'array', items: { type: 'number' } } },
          b: { type: 'array', items: { type: 'array', items: { type: 'number' } } },
      },
    },
  })
  multiply(@Body() body:{a:number[][];b:number})
}
