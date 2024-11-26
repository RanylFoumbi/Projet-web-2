import { Component, OnInit } from '@angular/core';
import { Task, TaskState } from 'src/app/models/task.model';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from 'src/app/components/edit-task/edit-task.component';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [
    {
      id: '1',
      title: 'Manger',
      description: 'Manger des frites avec du ketchup et du poulet frit avec du riz et des légumes verts au dîner',
      state: TaskState.DOING
    },
    {
      id: '2',
      title: 'Dormir',
      description: 'Dormir pendant 8 heures',
      state: TaskState.CANCELLED
    },
    {
      id: '3',
      title: 'Étudier',
      description: 'Étudier pour l\'examen de mathématiques',
      state: TaskState.TODO
    },
    {
      id: '4',
      title: 'Faire du sport',
      description: 'Aller courir pendant 30 minutes',
      state: TaskState.DONE
    }
  ];

  constructor(
    private readonly dialog: MatDialog,
    private readonly taskService: TaskServiceService
  ) { }

  ngOnInit(): void {
    this.taskService.task.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  handleRemoveTask(taskId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      }
    });
  }

  handleUpdateTask(id: String) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '500px',
      data: {
        task: this.tasks.find(t => t.id === id)
      }
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        this.taskService.addTask(result);
      }
    });
  }
}
