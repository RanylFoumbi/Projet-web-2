import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/env.dev';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']); 
      })
      .catch((error) => {
        console.error('Error during sign up:', error);
        this.errorMessage = error.message;
      });
  }
  
}
