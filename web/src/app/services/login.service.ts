import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppConst} from '../app-const';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http: HttpClient, private router: Router) {
  }

  getArtContentById(id) {
    const url = AppConst.serverPath + '/art/getArtContent/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions);
  }

  sendCredential(username: string, password: string) {
    const url = this.serverPath + '/login';
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      withCredentials: true
    };


    return this.http.post(url, body.toString(), httpOptions);
  }

  checkLoggedIn() {
    const url = this.serverPath + '/checkLoggedIn';

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'}),
      withCredentials: true
    };

    return this.http.get(url, httpOptions).pipe(
      map(
        res => {
          if (res) {
            return true;
          }
          return false;
        }
      )
    );
  }

  checkSession() {
    const url = this.serverPath + '/checkSession';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true
    };

    return this.http.get(url, httpOptions);
  }

  logout() {
    const url = this.serverPath + '/logout';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true
    };

    return this.http.post(url, '', httpOptions);
  }

}
