import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskServiceService } from './services/task-service.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'Todo web';
  delete = false;

  constructor(
    private readonly dialog: MatDialog,
    private readonly taskService: TaskServiceService
  ) { }

  ngOnInit(): void {
    this.taskService.selectedTasks.subscribe((tasks) => {
      this.delete = tasks.length > 0;
    });
  }

  createTask = () => {
    const dialog = this.dialog.open(EditTaskComponent, {
      width: '500px',
    });
    dialog.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.taskService.addTask(result);
      }
    });
  }

  handleSearch(term: string | undefined) {
    this.taskService.searchTask(term);
  }

  handleDelete() {
    this.taskService.deleteAll();
  }
}

