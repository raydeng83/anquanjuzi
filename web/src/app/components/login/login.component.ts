import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConst } from '../../app-const';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private busy = false;

  private serverPath = AppConst.serverPath;
  private loginError = false;
  private loggedIn = false;
  private credential = { 'username': '', 'password': '' };

  private emailSent = false;
  private usernameExists = false;
  private emailExists = false;
  private username: string;
  private email: string;

  private emailNotExists = false;
  private forgetPasswordEmailSent = false;
  private recoverEmail: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  onLogin() {
    this.busy = true;

    if (this.credential.username.trim() == '' || this.credential.password.trim() == '') {
      this.busy = false;
      this.loggedIn = false;
      this.loginError = true;
    } else {
      this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
        res => {
          const user = JSON.parse(JSON.stringify(res));
          console.log(user);
          this.loggedIn = true;
          const role = user.role[0].authority;

          // if (role == 'ROLE_USER') {
          //   this.router.navigate(['/dashboard']);
          // }
          //
          // if (role == 'ROLE_ADMIN') {
          //   this.router.navigate(['/adminPanel']);
          // }
          // this.busy = false;

        },
        error => {
          this.busy = false;
          this.loggedIn = false;
          this.loginError = true;
        }
      );
    }
  }

  onCheckSession() {
    this.loginService.checkSession().subscribe(
      res => {
        const user = JSON.parse(JSON.stringify(res));
        this.loggedIn = true;
        const role = user.authorities[0].authority;

        // if (role == 'ROLE_USER') {
        //   this.router.navigate(['/dashboard']);
        // }
        //
        // if (role == 'ROLE_ADMIN') {
        //   this.router.navigate(['/adminPanel']);
        // }
        this.busy = false;
      },
      error => {
        this.busy = false;
      }
    );
  }


  // onForgetPassword() {
  //   this.forgetPasswordEmailSent = false;
  //   this.emailNotExists = false;

  //   this.userService.retrievePassword(this.recoverEmail).subscribe(
  //     res => {
  //       console.log(res);
  //       this.emailSent = true;
  //     },
  //     error => {
  //       console.log(error.text());
  //       let errorMessage=error.text();
  //       if (errorMessage==="usernameExists") this.usernameExists=true;
  //       if (errorMessage==="emailExists") this.emailExists=true;
  //     }
  //   );
  // }

  ngOnInit() {
    this.busy = true;
    this.onCheckSession();
  }


}
