import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  token: string;
  firstName: string;

  constructor(private userService: UserService) 
  {
    this.userService.firstNameStream.subscribe((firstName: string) =>
    this.firstName = firstName);
   }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }
  
}
