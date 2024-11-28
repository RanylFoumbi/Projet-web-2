import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();
  private userSubject = new BehaviorSubject<any>(null); 
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userSubject.next(user);
      } else {
        this.userSubject.next(null);
      }
    });
  }

  signOutUser() {
    signOut(this.auth).then(() => {
      this.userSubject.next(null);
    });
  }
}
