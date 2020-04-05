import { Controller, Get, Param, Query, Post, Body, Ip, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageModel } from './message.dto';
import { Response } from 'express';

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

  // to use the value directly specify in the braces.
  @Get('nameParam/:name')
  getParamName(@Param('name') name: string): string {
    return this.appService.getWelcomeMessage(name);
  }

  @Get('values')
  getRequestQuery(@Query() query: MessageModel): string {
    return query.name;
  }

  @Get('valuesJson')
  getResponseJson(@Query() query: MessageModel, @Res() res: Response): Response<MessageModel> {
    return res.status(HttpStatus.OK).send(query);
  }

  @Get('valuesName')
  getRequestQueryParam(@Query('name') query: string): string {
    return query;
  }

  @Post('postMessage')
  getPostMessage(@Body() message: MessageModel): string {
    return message.name;
  }
}
