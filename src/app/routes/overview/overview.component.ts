import { Component, OnInit } from '@angular/core';
import {LogService} from '../../shared/services/logs.service';
import {RestService} from '../../rest.service';
import {UserService} from '../../shared/services/user.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    public myInterval = 5000;
    public slides: Array<any> = [];
    public logs: any;
    user: any;
    constructor( private logserv: LogService, public rest: RestService, public userService: UserService) {
        this.addSlide(4);
        this.addSlide(7);
        this.addSlide(8);
    }

    ngOnInit() {
        this.getUser();
        this.rest.getLogs().subscribe((data: {}) => {
            this.logs = data;
        });
    }

    public addSlide(id = 8): void {
        this.slides.push({
            image: 'assets/img/bg' + id + '.jpg'
        });
    }
    getLogs(): any {
        this.logserv.myMethod$.subscribe((logs) => {
                console.log(logs);
                return logs; // And he have data here too!
            }
        );
    }
    getUser() {
        this.userService.getUser(localStorage.getItem('id')).subscribe((data: {}) => {
            this.user = data;
        });
    }
}
