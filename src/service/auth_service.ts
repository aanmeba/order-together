import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserInfo,
  User,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

export interface UserAuthInterface {
  signUp(a: string, b: string): Promise<UserInfo & User>;
  logIn(a: string, b: string): Promise<UserInfo & User>;
  logOut(a: string, b: string): void;
}

export class UserAuth implements UserAuthInterface {
  async signUp(email: string, password: string): Promise<UserInfo & User> {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return await userCredential.user;
  }

  async logIn(email: string, password: string): Promise<UserInfo & User> {
    const userCredential = signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return (await userCredential).user;
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

  // onAuthChange(onUserChanged) {
  //   firebaseAuth.onAuthStateChanged((user) => {
  //     onUserChanged(user);
  //   });
  // }
}
