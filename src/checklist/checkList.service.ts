import { Injectable } from "@nestjs/common";
import { CheckList } from "./dto/checkList.dto";
import { CreateTask } from "./dto/createTask.dto";

@Injectable()
export class CheckListService {
    
    private readonly tasks: CheckList[] = [];

    addNewTask(task: CreateTask): string {
        const newTask = new CheckList(task.taskName);
        this.tasks.push(newTask);
        return newTask.id;
    }

    getTasks(): CheckList[] {
        return this.tasks;    
    }
    
    updateTask(id: string): boolean {
        const updateTask = this.tasks.find(task => {
           return task.id === id
        });
        if (updateTask) {
            updateTask.done = !updateTask.done;
            return true;
        } else {
            return false;
        }
    }

    deleteTask(id: string): boolean {
        const deletedTask = this.tasks.splice(
            this.tasks.findIndex(task => task.id === id), 
            1
        );
        if (deletedTask) {
            return true;
        } else {
            return false;
        }
    }
}