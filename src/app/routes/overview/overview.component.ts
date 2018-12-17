import { Component, OnInit } from '@angular/core';
import {LogService} from '../../shared/services/logs.service';
import {RestService} from '../../rest.service';
import {UserService} from '../../shared/services/user.service';
import {Log} from '../../shared/models/log.model';
import {environment} from '../../../environments/environment';

const endpoint = environment.apiServer;

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
    images: any[] = [];
    constructor( private logserv: LogService, public rest: RestService, public userService: UserService) {

    }

    ngOnInit() {
        this.getUser();
        this.rest.getLogs().subscribe((data: {}) => {
            this.logs = data;
        });
        this.rest.getLogs().subscribe((data: Log[]) => {
            for (let log of data) {
                console.log(log.imagePath);
                if (log.imagePath) {
                    this.images.push({ imagePath: log.imagePath, timestamp: log.timestamp });
                }
            };
            this.setupGallery();
        });
    }

    setupGallery() {
        const path: String = endpoint;
        // need a rest function that gives path of pictures
        console.log(this.images);
        for (let key in this.images) {
            let img = this.images[key];
            console.log(img);
            const src = `${path}${img.imagePath}`;
            this.slides.push({
                image: src
            });
        }
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
