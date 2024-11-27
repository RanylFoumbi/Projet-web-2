import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { SelectTask, Task, TaskState } from '../models/task.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  task = new BehaviorSubject<Task[]>([])
  selectedTasks = new BehaviorSubject<Task[]>([])

  taskListSubscription?: Subscription;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly firestore: Firestore
  ) {
    this.retrieveTasks();
  }

  handleTaskSelection(selectTask: SelectTask) {
    if (selectTask.selected) {
      this.selectedTasks.next([...this.selectedTasks.value,
      this.task.value.find(task => task.id === selectTask.id)!]);
    } else {
      this.selectedTasks.next(this.selectedTasks.value
        .filter(task => task.id !== selectTask.id));
    }
  }

  searchTask(term: string | undefined) {
    if (term) {
      const filteredTasks = this.task.value.filter((task) => {
        return task.title.toLowerCase().includes(term.toLowerCase());
      });
      this.task.next(filteredTasks);
    } else {
      this.retrieveTasks();
    }
  }

  // Retrieve tasks
  retrieveTasks() {
    if (this.taskListSubscription) {
      this.taskListSubscription.unsubscribe();
    }
    const tasksCollection = collection(this.firestore, 'tasks');
    collectionData(tasksCollection, { idField: 'id' }).subscribe((tasks) => {
      const mappedTasks = tasks.map<Task>((task) => {
        return {
          id: task['id'],
          title: task['title'],
          description: task['description'],
          state: task['state'] as TaskState,
          startDate: task['startDate'].toDate(),
          endDate: task['endDate'].toDate(),
        }
      });

      this.task.next(mappedTasks);
    });
  }

  // Add task
  async addTask(task: Task): Promise<void> {
    if (task.id) {
      const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
      await setDoc(taskDocRef, task);
      this.snackBar.open('Tache mise à jour avec succès', 'OK', { duration: 3000 });
    } else {
      const tasksCollectionRef = collection(this.firestore, 'tasks');
      await addDoc(tasksCollectionRef, task);
      this.snackBar.open('Tache ajoutée avec succès', 'OK', { duration: 3000 });
    }
    this.retrieveTasks()
  }

  // Delete task
  async deleteTask(taskId: string): Promise<void> {
    const taskRef = doc(this.firestore, 'tasks', taskId);
    await deleteDoc(taskRef);
    this.retrieveTasks();
  }

  // Delete all tasks
  async deleteAll(): Promise<void> {
    this.selectedTasks.value.forEach(async (task) => {
      const taskRef = doc(this.firestore, 'tasks', task.id);
      await deleteDoc(taskRef);
    });
    this.retrieveTasks();
    this.selectedTasks.next([]);
    this.snackBar.open('Taches supprimées avec succès', 'OK', { duration: 3000 });
  }
}
