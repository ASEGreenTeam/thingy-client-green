import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  registerThingyMessage: String;
  timeout: any;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(localStorage.getItem('id')).subscribe((data: {}) => {
      this.user = data;
    })
  }

  registerThingy() {
    this.userService.registerThingy().subscribe();
    this.registerThingyMessage = "Please, press the button on your Thingy 5 times...";
    this.timeout = setTimeout(() => {
      this.getUser();
      if (!this.user.thingyId) {
        this.registerThingyMessage = "Failed. Please try again.";
      } else {
        this.registerThingyMessage = "Thingy registered: " + this.user.thingyId;
      }
    }, 10000);
    this.timeout.start();
  }

  changeAlarm() {
    this.userService.updateUser(
      this.user.id,
      { alarm: !this.user.alarm }
    ).subscribe((data: {}) => {
      this.user = data;
    })
  }

  changeEmailAlert() {
    this.userService.updateUser(
      this.user.id,
      { emailAlert: !this.user.emailAlert }
    ).subscribe((data: {}) => {
      this.user = data;
    })
  }

  changeImagesCapture() {
    this.userService.updateUser(
      this.user.id,
      { imagesCapture: !this.user.imagesCapture }
    ).subscribe((data: {}) => {
      this.user = data;
    })
  }

}
