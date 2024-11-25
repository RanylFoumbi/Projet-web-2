import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {

  @Input() task!: Task;
  @Output() remove = new EventEmitter<String>();
  @Output() update = new EventEmitter<String>();

  getStatusClasses(): string {
    switch (this.task.status) {
      case TaskStatus.Completed:
        return 'border-green-300 bg-green-100 text-green-600';
      case TaskStatus.Pending:
        return 'border-yellow-300 bg-yellow-100 text-yellow-600';
      case TaskStatus.InProgress:
        return 'border-blue-300 bg-blue-100 text-blue-600';
      case TaskStatus.Cancelled:
        return 'border-red-300 bg-red-100 text-red-600';
    }
  }

  removeTask = () => {
    this.remove.emit(this.task.id);
  }

  updateTask = () => {
    this.update.emit(this.task.id);
  }

}
