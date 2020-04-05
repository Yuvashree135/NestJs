import { CreateTask } from "./createTask.dto";
import * as uuid from 'uuid';

export class CheckList extends CreateTask {
    done: boolean;
    id: string;

    constructor(taskName: string) {
        super(taskName);
        this.done = false;
        this.id = uuid.v4();
    }
}