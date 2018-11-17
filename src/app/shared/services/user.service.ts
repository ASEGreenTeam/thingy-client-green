import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { User } from '../models/user.model';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<Boolean> {
    return this.http.post<any>(endpoint + 'register', user, httpOptions).pipe(
      map(this.inspectData),
      catchError(this.handleError)
    );
  }
  changedPassword(user: User): Observable<Boolean> {
        return this.http.post<any>(endpoint + 'changepw', user, httpOptions).pipe(
            map(this.inspectData),
            catchError(this.handleError)
        );
    }

  private inspectData(data) {
    console.log(data);
    return data;
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    console.error(error);

    return throwError(
      'Request failed');
  }
}
