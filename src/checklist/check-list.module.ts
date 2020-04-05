import { Module } from '@nestjs/common';
import { CheckListController } from './checkList.controller';
import { CheckListService } from './checkList.service';

@Module({
    controllers: [CheckListController],
    providers: [CheckListService]
})
export class CheckListModule {}
