import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckListController } from './checklist/checklist.controller';

@Module({
  imports: [],
  controllers: [AppController, CheckListController],
  providers: [AppService],
})
export class AppModule {}
