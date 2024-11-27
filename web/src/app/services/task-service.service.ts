import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, setDoc, orderBy, query } from '@angular/fire/firestore';
import { SelectTask, Task, TaskState } from '../models/task.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from './language.service';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  task = new BehaviorSubject<Task[]>([])
  selectedTasks = new BehaviorSubject<Task[]>([])
  cachedTask: Task[] = [];
  taskListSubscription?: Subscription;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly firestore: Firestore,
    private languageService: LanguageService
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

  filterByState(state: string) {
    if (state === 'ALL') {
      this.task.next(this.cachedTask);
    } else {
      const filteredTasks = this.cachedTask.filter((task) => {
        return task.state === state;
      });
      this.task.next(filteredTasks);
    }
  }

  searchTask(term: string | undefined) {
    if (term) {
      const filteredTasks = this.cachedTask.filter((task) => {
        return task.title.toLowerCase().includes(term.toLowerCase()) ||
          task.description.toLowerCase().includes(term.toLowerCase());
      });
      this.task.next(filteredTasks);
    } else {

    }
  }

  // Retrieve tasks
  retrieveTasks() {
    if (this.taskListSubscription) {
      this.taskListSubscription.unsubscribe();
    }
    const tasksCollection = collection(this.firestore, 'tasks');
    const tasksQuery = query(tasksCollection, orderBy('title'));
    collectionData(tasksQuery, { idField: 'id' }).subscribe((tasks) => {
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
      this.cachedTask = mappedTasks;
      this.task.next(mappedTasks);
    });
  }

  // Add task
  async addTask(task: Task): Promise<void> {
    if (task.id) {
      const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
      await setDoc(taskDocRef, {
        title: task.title,
        description: task.description,
        state: task.state,
        startDate: task.startDate,
        endDate: task.endDate,
        updatedAt: new Date()
      });
      this.snackBar.open(this.languageService.translate('task.confirm.update'), 'OK', { duration: 3000 });
    } else {
      const tasksCollectionRef = collection(this.firestore, 'tasks');
      await addDoc(tasksCollectionRef, {
        title: task.title,
        description: task.description,
        state: task.state,
        startDate: task.startDate,
        endDate: task.endDate,
        updatedAt: new Date()
      });
      this.snackBar.open(this.languageService.translate('task.confirm.add'), 'OK', { duration: 3000 });
    }
    this.retrieveTasks()
  }

  // Delete task
  async deleteTask(taskId: string): Promise<void> {
    const taskRef = doc(this.firestore, 'tasks', taskId);
    await deleteDoc(taskRef);
    this.retrieveTasks();
    this.snackBar.open(this.languageService.translate('task.confirm.delete'), 'OK', { duration: 3000 });
  }

  // Delete all tasks
  async deleteAll(): Promise<void> {
    this.selectedTasks.value.forEach(async (task) => {
      const taskRef = doc(this.firestore, 'tasks', task.id);
      await deleteDoc(taskRef);
    });
    this.retrieveTasks();
    this.selectedTasks.next([]);
    this.snackBar.open(this.languageService.translate('task.confirm.deletes'), 'OK', { duration: 3000 });
  }
}
