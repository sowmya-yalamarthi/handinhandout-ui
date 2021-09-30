import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../modules/accounts/_models/user';
import { map, finalize, catchError, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppserviceService {
  [x: string]: any;
  currentUser: User;
  currentUserInfo: User;
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };

  constructor(private http: HttpClient) {

  }

  getUser(reqObj: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "auth/login", reqObj).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
      console.log(this.currentUser);
      return true;
    }),
      finalize(() => { }),
      catchError((error: any) => {
        return of(false);
      }));
  }

  registerUser(reqObj: any) {

    return this.http.post(environment.baseUrl + "auth/signup", reqObj, { responseType: 'text' });
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + "auth/userInfo").pipe(map(userInfo => {
      this.currentUserInfo = userInfo;
      localStorage.setItem('currentUserInfo', JSON.stringify(userInfo));
      this.currentUserInfo = <User>(JSON.parse(localStorage.getItem('currentUserInfo')!));
      return userInfo;
    }))
  }


}


