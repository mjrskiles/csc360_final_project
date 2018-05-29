import { Component, OnInit } from '@angular/core';

//import {UserService} from '../user.service';

import {User} from '../user';
import {USERS } from '../mockUsers';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit 
{
  selectedUser: User = 
  {
    email: "DefaultUser",
    password: "DefaultPass",
    alertLevel: 0
  }
  //users: User[];
  users = USERS;
  //constructor(private userService: UserService) { }
  constructor() { }

  ngOnInit()
  {
    this.getUsers();
  }
  
  onSelect(user: User): void 
  {
    this.selectedUser = user;
  }
  getUsers(): void 
  {
    //this.users = this.userService.getUsers();
  }

}
