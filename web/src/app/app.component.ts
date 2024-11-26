import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskServiceService } from './services/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'Todo web';
  constructor(
    private readonly dialog: MatDialog,
    private readonly taskService: TaskServiceService
  ) { }

  createTask = () => {
    const dialog = this.dialog.open(EditTaskComponent, {
      width: '500px',
    });
    dialog.afterClosed().subscribe((result) => {
      if (typeof result == 'object') {
        console.log(result);
      }
    });
  }

  handleSearch(term: string | undefined) {
    this.taskService.searchTask(term);
  }
}

