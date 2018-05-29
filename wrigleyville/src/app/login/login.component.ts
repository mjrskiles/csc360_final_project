import { Component, OnInit, HostBinding } from '@angular/core';
//import { Component} from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { firebase } from '@firebase/app'

import { auth } from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
//   template: `
//   <div *ngIf="afAuth.user | async as user; else showLogin">
//     <h1>Hello {{ user.displayName }}!</h1>
//     <button (click)="logout()">Logout</button>
//   </div>
//   <ng-template #showLogin>
//     <p>Please login.</p>
//     <button (click)="login()">Login with Google</button>
//   </ng-template>
// `,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
//export class LoginComponent 
{

  user = null

  constructor(private authService: AuthService, 
              private router: Router) 
  {
  }

  signInWithGoogle() 
  {
     this.authService.signInWithGoogle()//;
     .then((res) => {
      this.router.navigate(['dashboard'])
    })
  .catch((err) => console.log(err));
  }

  logout() 
  {
     this.authService.logout();//;
     this.router.navigate(['/']);
  }


  // constructor(public afAuth: AngularFireAuth) {
  // }
  // login() {
  //   this.afAuth.auth.signInWithPopup(
  //     new firebase.auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
  ngOnInit() {
  }

}
