import { Component } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';

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

  handleRemoveTask(taskId: String) { 
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
