import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

const endpoint = environment.apiServer;
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

  getUser(user_id: String): Observable<User> {
    return this.http.get<User>(endpoint + 'users/' + user_id, httpOptions).pipe(
      retry(3),
      map(this.inspectData),
      catchError(this.handleError)
    );
  }

  updateUser(user_id: String, attributes): Observable<User> {
    return this.http.patch<User>(endpoint + 'users/' + user_id, attributes, httpOptions).pipe(
      retry(3),
      map(this.inspectData),
      catchError(this.handleError)
    );
  }

  registerThingy(): Observable<Boolean> {
    return this.http.get<any>(endpoint + 'registerThingy', httpOptions).pipe(
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
