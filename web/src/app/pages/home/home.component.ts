import { Component } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from 'src/app/components/edit-task/edit-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Manger',
      description: 'Manger des frites avec du ketchup et du poulet frit avec du riz et des légumes verts au dîner',
      status: TaskStatus.Pending
    },
    {
      id: '2',
      title: 'Dormir',
      description: 'Dormir pendant 8 heures',
      status: TaskStatus.Cancelled
    },
    {
      id: '3',
      title: 'Étudier',
      description: 'Étudier pour l\'examen de mathématiques',
      status: TaskStatus.Todo
    },
    {
      id: '4',
      title: 'Faire du sport',
      description: 'Aller courir pendant 30 minutes',
      status: TaskStatus.Completed
    }
  ];

  constructor(private readonly dialog: MatDialog) { }

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

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.map(t => (t.id === result.id ? result : t));
      }
    });
  }
}
