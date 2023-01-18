import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getFakeJson(): Observable<any>{
    let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
}
