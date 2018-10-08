import { Injectable } from '@angular/core';
import {AppConst} from '../app-const';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }

  getArtList() {
    const url = AppConst.serverPath + '/art/getArtList';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(url, httpOptions);
  }

  getArtContentById(id) {
    const url = AppConst.serverPath + '/art/getArtContent/' + id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(url, httpOptions);
  }
}
