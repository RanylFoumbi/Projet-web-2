import { Inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor( private readonly firestore: Firestore) { }

}
