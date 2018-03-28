import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const dataUrl = '/api/posts';

@Injectable()
export class MyDataService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(dataUrl);
  }

  createPost(params: any): Observable<Object> {
    // const data = new HttpParams();
    // data.set('title', 'imba!');
    // data.set('userId', '100');
    // return this.http.post(dataUrl, null, {params: data});
    return this.http.post(dataUrl, params);
  }
}
