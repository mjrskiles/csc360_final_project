import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { firebase } from '@firebase/app';

//import {User} from '@firebase/auth'

@Injectable()
export class AuthService 
{
  //private user: Observable<firebase.User>;
  //private userDetails: firebase.User = null;

  // private user: Observable<firebase.User>;
  // private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, 
              private router: Router) 
  { 
    //this.user = _firebaseAuth.authState;
    // this.user.subscribe(
    //   (user) => {
    //     if (user) {
    //       this.userDetails = user;
    //       console.log(this.userDetails);
    //     }
    //     else {
    //       this.userDetails = null;
    //     }
    //   }
    // );
  }

  signInWithGoogle() 
  {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
  }

  isLoggedIn() 
  {
    //this.router.navigate(['/dashboard'])
    // if (this.userDetails == null ) {
    //     return false;
    //   } else {
    //     return true;
    //   }
  }
  logout() 
  {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
      //.then((res) => this.router.navigate(['/dashboard']));

  }


}
