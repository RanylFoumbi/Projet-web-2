import { GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';


export const uiConfig: firebaseui.auth.Config = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID, 
    EmailAuthProvider.PROVIDER_ID, 
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResult) => {
      console.log('User signed in:', authResult);
      return false;
    },
  },
};
