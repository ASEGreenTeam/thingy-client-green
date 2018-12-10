import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();


    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }
    myMethod(logs) {
        console.log('Logservice'); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        console.log(logs);
        this.myMethodSubject.next(logs);
    }

}
