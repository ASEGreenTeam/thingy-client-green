import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable, pipe} from 'rxjs/Rx';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string ): Observable<any> {
      const data = {'username': email, 'password': password};
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this.http.post<any>(endpoint + 'login', data, config).pipe(
        map(this.setSession),
        catchError(this.handleError)
      );
  }

    changePassword(id: string, oldpassword: string, password: string ): Observable<any> {
        const data = {'id': id, 'oldpassword': oldpassword, 'password': password};
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return this.http.post<any>(endpoint + 'changePW', data, config);
    }
  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    return throwError(
      'Login failed!');
  }

  private setSession(authResult) {
    console.log(authResult.token);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('id', authResult._id);
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getId() {
        return localStorage.getItem('id');
    }

  logout() {
    localStorage.removeItem('token');
  }

  public isLoggedIn() {
    localStorage.hasItem('token');
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
