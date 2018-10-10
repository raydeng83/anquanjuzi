import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  loggedIn = false;

  user;

  constructor(private loginService: LoginService) { }

  onLogout() {
    this.loginService.logout().subscribe(
      res => {
        console.log(res);
        window.location.reload();
      }, error => {
        window.location.reload();
      }
    );
  }

  ngOnInit() {
    console.log('checking login...');
    this.loginService.checkSession().subscribe(
      res => {
        console.log(res);
        this.loggedIn = true;
        this.user = res;
      },
      error => {
        console.log(error);
        this.loggedIn = false;
      }
    );
  }

}
