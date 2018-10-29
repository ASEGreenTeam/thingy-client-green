import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Log } from './shared/models/log.model';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(endpoint + 'logs').pipe(
      retry(3),
      map(this.inspectData),
      catchError(this.handleError)
    );
  }

  private inspectData(data) {
    console.log(data);
    return data;
  }

  clearLogs(): Observable<any> {
    return this.http.delete(endpoint + 'logs').pipe();
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    console.error(error);

    return throwError(
      'Request failed');
  }
}
