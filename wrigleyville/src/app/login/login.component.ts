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
  ngOnInit() {
  }

}
