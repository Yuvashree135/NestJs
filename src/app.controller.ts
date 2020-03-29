import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageModel } from './message.dto';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name/:name')
  getParamValue(@Param() params): string {
    return this.appService.getWelcomeMessage(params.name);
  }

  @Get('values')
  getRequestQuery(@Query() query: MessageModel): string {
    return query.name;
  }

  @Post('postMessage')
  getPostMessage(@Body() message: MessageModel): string {
    return message.name;
  }
}
