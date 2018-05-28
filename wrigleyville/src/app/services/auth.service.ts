import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { firebase } from '@firebase/app';

import {User} from 'firebase'


@Injectable()
export class AuthService 
{
  private user: Observable<User>;
  private userDetails: User = null;
  private name: string = null;

  constructor(private _firebaseAuth: AngularFireAuth, 
              private router: Router) 
  { 
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => 
      {
        //if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
          this.name = this.userDetails.displayName;
          console.log(this.name);

        // }
        // else {
        //   this.userDetails = null;
        // }
      }
    );
  }

  signInWithGoogle() 
  {
    console.log("signing in");

    return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider())


  }

  GetName()
  {
    console.log("getting name");
    return this.name;
  }

  isLoggedIn() 
  {
    console.log("checking logged in status");

    if (this.userDetails == null ) 
    {
      console.log("no user found");
      return false;
    } 
    else {
      console.log("user found");
      return true; 
    }
  }
  logout() 
  {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));

  }


}
