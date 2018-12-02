import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../core/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  registerThingyMessage: String;
  timeout: any;
  delayForm: FormGroup

  constructor(public userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getUser();
    this.delayForm = this.fb.group({
      'alarmDelay' : [null, Validators.required]
    });
  }

  getUser() {
    this.userService.getUser(localStorage.getItem('id')).subscribe((data: {}) => {
      this.user = data;
    })
  }

  registerThingy() {
    this.userService.updateUser(
      this.user.id,
      { thingyUuid: '' }
    ).subscribe();
    this.userService.registerThingy().subscribe();
    this.registerThingyMessage = "Please, press the button on your Thingy 5 times...";
    this.timeout = setTimeout(() => {
      this.userService.getUser(this.user.id).subscribe((data: {}) => {
        this.user = data;
        if (!this.user.thingyId) {
          this.registerThingyMessage = "Failed. Please try again.";
        } else {
          this.registerThingyMessage = "Thingy registered: " + this.user.thingyId;
        }
      });
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

  submitDelayForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.delayForm.controls) {
        this.delayForm.controls[c].markAsTouched();
    }
    if (this.delayForm.valid) {
      if (value.alarmDelay) {
        this.userService.updateUser(
          this.user.id,
          { alarmDelay: value.alarmDelay }
        ).subscribe((data: {}) => {
          this.user = data;
        });
      }
    }
  }

}
