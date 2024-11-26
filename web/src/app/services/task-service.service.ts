import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Task, TaskState } from '../models/task.model';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  task = new BehaviorSubject<Task[]>([])
  taskListSubscription?: Subscription;

  constructor(private firestore: Firestore) { 
    this.retrieveTasks();
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
    collectionData(tasksCollection).subscribe((tasks) => {
      
      const mappedTasks = tasks.map<Task>((task) => {
        return {
          id: task['id'],
          title: task['title'],
          description: task['description'],
          state: task['state'] as TaskState
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
    } else {
      const tasksCollectionRef = collection(this.firestore, 'tasks');
      const docRef = await addDoc(tasksCollectionRef, task);
      task.id = docRef.id;
      await setDoc(docRef, task);
    }
    this.retrieveTasks()
  }

  // Delete task
  async deleteTask(taskId: string): Promise<void> {
    const taskRef = doc(this.firestore, 'tasks', taskId);
    await deleteDoc(taskRef);
    this.retrieveTasks();
  }
}
