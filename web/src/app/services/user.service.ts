import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConst} from '../app-const';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http: HttpClient, private router: Router) {
  }

  register(user) {
    const url = this.serverPath + '/user/registration';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(url, JSON.stringify(user), httpOptions);
  }

  checkExistingUser(user) {
    const url = this.serverPath + '/user/checkExistingUser';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(url, JSON.stringify(user), httpOptions);
  }
}
