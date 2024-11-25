import { Component } from '@angular/core';
import { Task, TaskStatus } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Todo web';
  test: Task = {
    id: '1',
    title: 'Test',
    description: 'Test',
    status: TaskStatus.Pending
  }
}
