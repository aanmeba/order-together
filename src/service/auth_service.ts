import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./firebase";

export interface UserAuthInterface {
  signUp?(a: string, b: string): void;
  logIn?(a: string, b: string): void;
  logOut?(a: string, b: string): void;
}

export class UserAuth implements UserAuthInterface {
  signUp(email: string, password: string) {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "--- signup user");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "--- login user");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logOut() {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        alert("You're successfully signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.code, error.message);
      });
  }
}
