import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {SnotifyPosition, SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  secondPassword;

  emptyUsername = false;
  emptyPassword1 = false;
  emptyPassword2 = false;
  invalidEmail = false;
  mismatchPassword = false;
  usernameExists = false;
  emailExists = false;

  constructor(private userService: UserService, private snotifyService: SnotifyService) { }

  testEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.user.email).toLowerCase());
  }


  onRegistration() {
    if (this.user.username == null || this.user.username == '') {
      this.emptyUsername = true;
      const that = this;
      setTimeout(function() {
        that.emptyUsername = false;
      }, 4000);
      return;
    }

    if (!this.testEmail()) {
      this.invalidEmail = true;
      const that = this;
      setTimeout(function() {
        that.invalidEmail = false;
      }, 4000);
      return;
    }

    if (this.user.password == null || this.user.password == '') {
      this.emptyPassword1 = true;
      const that = this;
      setTimeout(function() {
        that.emptyPassword1 = false;
      }, 4000);
      return;
    }

    if (this.secondPassword == null || this.secondPassword == '') {
      this.emptyPassword2 = true;
      const that = this;
      setTimeout(function() {
        that.emptyPassword2 = false;
      }, 4000);
      return;
    }

    if (this.user.password != this.secondPassword) {
      this.mismatchPassword = true;
      const that = this;
      setTimeout(function() {
        that.mismatchPassword = false;
      }, 4000);
      return;
    }

    this.userService.checkExistingUser(this.user).subscribe(
      res => {
        console.log(res);
        if(res.res == 'username exists') {
          this.usernameExists = true;
          const that = this;
          setTimeout(function() {
            that.usernameExists = false;
          }, 4000);
          return;
        }

        if(res.res == 'email exists') {
          this.emailExists = true;
          const that = this;
          setTimeout(function() {
            that.emailExists = false;
          }, 4000);
          return;
        }

        this.userService.register(this.user).subscribe(
          res => {
            console.log(res);
            this.snotifyService.success('注册成功，请登录', '', {
              timeout: 2000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              position: SnotifyPosition.centerCenter
            });
          }
        );
      }
    );


  }

  ngOnInit() {
  }

}
