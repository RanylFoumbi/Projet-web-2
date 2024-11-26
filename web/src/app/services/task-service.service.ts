import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private firestore: Firestore) {}

  // Get tasks
  getTasks(): Observable<Task[]> {
    const tasksCollection = collection(this.firestore, 'tasks');
    return collectionData(tasksCollection) as Observable<Task[]>;
  }

  // Add task
  addTask(task: Task): Promise<void> {
    const taskRef = doc(this.firestore, 'tasks', task.id!);
    return updateDoc(taskRef, task);
  }

  // Delete task
  deleteTask(taskId: string): Promise<void> {
    const taskRef = doc(this.firestore, 'tasks', taskId);
    return deleteDoc(taskRef);
  }
}
