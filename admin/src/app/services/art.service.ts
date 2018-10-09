import { Injectable } from '@angular/core';
import {AppConst} from '../app-const';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }

  sendArt(art) {
    const url = AppConst.serverPath + '/art/create';

    const info = {
      'title' : art.title,
      'originalUrl' : art.originalUrl,
      'type' : art.type.name,
      'date' : art.date,
      'content' : art.content,
      'imageId' : art.imageId,
      'summary' : art.summary
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(url, info, httpOptions);
  }
}
