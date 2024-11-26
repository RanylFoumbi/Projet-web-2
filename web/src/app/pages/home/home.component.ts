import { Component } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Manger',
      description: 'Manger des frites avec du ketchup et du poulet frit avec du riz et des légumes verts au dîner',
      status: TaskStatus.Doing
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

  constructor(private dialog: MatDialog) {}

  handleRemoveTask(taskId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      }
    });
  }

  filteredTasks: Task[] = [...this.tasks];

  handleSearch(term: string | undefined) {
    if (!term) {
      this.filteredTasks = [...this.tasks]; 
    } else {
      this.filteredTasks = this.tasks.filter((task) =>
        task.title.toLowerCase().includes(term.toLowerCase()) || 
        task.description.toLowerCase().includes(term.toLowerCase()) 
      );
    }
  }
}
