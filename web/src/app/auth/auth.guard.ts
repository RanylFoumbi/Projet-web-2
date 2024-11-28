import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = getAuth();
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user is logged in (through firebase), allow navigation
        resolve(true);
      } else {
        // if user is not logged in, redirect to login page
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
