import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService, public authService: AuthService) {

        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }

    ngOnInit() {
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

    public userLogout(): void {
        this.authService.logout();
        location.reload();
    }

}
