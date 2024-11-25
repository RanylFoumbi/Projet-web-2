import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {

  @Input() task!: Task;
  @Output() remove = new EventEmitter<String>();
  @Output() update = new EventEmitter<String>();

  removeTask = () => {
    this.remove.emit(this.task.id);
  }

  updateTask = () => {
    this.update.emit(this.task.id);
  }

}
