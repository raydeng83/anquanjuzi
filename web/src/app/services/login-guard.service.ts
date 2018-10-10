import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
  private loggedIn: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    const res = this.loginService.checkLoggedIn()
    res.subscribe (
      res => {
        console.log(res);
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
    return res;
  }
}
