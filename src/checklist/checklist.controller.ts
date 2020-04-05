import { Controller, Post, Body, HttpStatus, Res, Get, Put, Param, Delete } from "@nestjs/common";
import { CheckList } from "./dto/checkList.dto";
import { Response } from 'express';
import { CheckListService } from "./checkList.service";
import { isNullOrUndefined } from "util";
import { CreateTask } from "./dto/createTask.dto";

@Controller('checklist')
export class CheckListController {
    
    constructor(private checkListService: CheckListService) {}

    @Post()
    addNewTask(@Body() task: CreateTask, @Res() res: Response): Response<string> {
        if (!isNullOrUndefined(task) && !isNullOrUndefined(task.taskName)) {
            const result = this.checkListService.addNewTask(task);
            if (result) {
                return res.status(HttpStatus.OK).send(result);
            } else {
                return res.status(HttpStatus.BAD_REQUEST);
            }
        } else {
            return res.status(HttpStatus.BAD_REQUEST).send('Failed');
        }
    }

    @Get()
    getAllTasks(@Res() res: Response): Response<CheckList[]> {
        return res.status(HttpStatus.OK).send(this.checkListService.getTasks());
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Res() res: Response): Response<string> {
        if (this.checkListService.updateTask(id)) {
            return res.status(HttpStatus.OK).send('Updated');
        } else {
            return res.status(HttpStatus.NOT_FOUND).send('Failed');
        }
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string, @Res() res: Response): Response<string> {
        if (this.checkListService.deleteTask(id)) {
            return res.status(HttpStatus.OK).send('Deleted');
        } else {
            return res.status(HttpStatus.NOT_FOUND).send('Failed');
        }
    }
}