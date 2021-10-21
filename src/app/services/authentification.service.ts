import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { User } from  '../models/user';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user: User;
  userData: any;
  constructor(private afAuth: AngularFireAuth, public  router:  Router,private afs: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((userData) => resolve(userData), (error) => reject(error))
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

//   async login(email: string, password: string) {
//     var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
//     this.router.navigate(['admin/list']);
// }

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((userData) => resolve(userData,), (error) => reject(error))
    })
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    // this.router.navigate(['admin/verify-email']);
}

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //  new Promise((resolve, reject) => {
    //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //     .then((userData) => resolve(userData), (error) => reject(error))
    // })
  }

  loginWithFacebook() {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    // return new Promise((resolve, reject) => {
    //   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //     .then((userData) => resolve(userData), (error) => reject(error))
    // })
  }

 async logOut() {
    await this.afAuth.auth.signOut()
    localStorage.removeItem('user');
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
 }

  getAuth(): any {
    return this.afAuth.authState.pipe(auth => auth)
  }
  

  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return (user !== null && user.emailVerified !== false) ? true : false;
  // }

}
