import { Component, OnInit } from '@angular/core';
import { SelectTask, Task } from 'src/app/models/task.model';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from 'src/app/components/edit-task/edit-task.component';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { AuthService

 } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  noTaskMessage = 'Aucune tâche disponible pour le moment.';
  title = 'Todo web';
  delete = false;

  constructor(
    private readonly dialog: MatDialog,
    private readonly taskService: TaskServiceService,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.taskService.task.subscribe((tasks) => {
      this.tasks = tasks;
      
    });
    this.taskService.selectedTasks.subscribe((tasks) => {
      this.delete = tasks.length > 0;
    });
  }

  handleSelectTask(selectTask: SelectTask) {
    this.taskService.handleTaskSelection(selectTask);
  }

  handleRemoveTask(taskId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.taskService.deleteTask(taskId);
      }
    });
  }

  handleUpdateTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '500px',
      data: {
        task: task
      }
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.taskService.addTask(result);
      }
    });
  }

  handleUpdateTaskState(task: Task) {
    this.taskService.addTask(task);
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

  handleChangeState(state: string) {
    this.taskService.filterByState(state);
  }

  handleDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.taskService.deleteAll();      }
    });
  }
}
