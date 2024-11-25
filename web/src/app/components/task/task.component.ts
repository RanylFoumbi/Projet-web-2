import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {

  tasks = [
    { name: 'Task 1', description: 'This is the first task', completed: false },
    { name: 'Task 2', description: 'This is the second task', completed: false },
    { name: 'Task 3', description: 'This is the third task', completed: false }
  ];

  removeTask = (index: number) => {
    this.tasks.splice(index, 1);
  }

  updateTask = (index: number, task: any) => {
    this.tasks[index] = task;
  }

}
