import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private usersService:UsersService) { }
  greetings:string = 'Good Afternoon';
  userinfo:any = {};
  ngOnInit() {
    let time = new Date().getHours();
    this.greetings = 'Good '+ (time < 12 ? 'Morning' : time < 18 ? 'Afternoon' : 'Evening');
    this.userinfo = this.usersService.getUserinfo();
  }

}
