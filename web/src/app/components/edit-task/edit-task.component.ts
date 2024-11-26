import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {

  @Input() task?: Task;
  @Output() save = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  cacheTask?: Task;

  ngOnInit = (): void => {
    if(this.task) {
      this.cacheTask = { ...this.task };
    }
  }

  saveTask = (): void => {
    this.save.emit(this.task);
  }

  cancelEdit = (): void => {
    this.cancel.emit();
  }

  resetTask = (): void => {
    if (this.cacheTask) {
      this.task = { ...this.cacheTask };
    }
  }

}
