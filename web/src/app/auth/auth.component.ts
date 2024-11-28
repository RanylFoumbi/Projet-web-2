import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebaseui from 'firebaseui';
import { getAuth } from 'firebase/auth';
import { uiConfig } from './firebaseui-config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  ui!: firebaseui.auth.AuthUI;

  ngOnInit() {
    const auth = getAuth();
    this.ui = new firebaseui.auth.AuthUI(auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  ngOnDestroy() {
    this.ui.delete();
  }
}
