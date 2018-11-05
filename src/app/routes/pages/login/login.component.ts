import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { SettingsService } from '../../../core/settings/settings.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    loading = false;
    loginFailed = false;


    constructor(public settings: SettingsService, public authService: AuthService, private router: Router, fb: FormBuilder) {
      // Logout user
      this.authService.logout();

      // Set form validations
      this.valForm = fb.group({
          'email': [null, Validators.required],
          'password': [null, Validators.required]
      });

    }

    submitForm($ev, value: any) {
      $ev.preventDefault();

      for (let c in this.valForm.controls) {
          this.valForm.controls[c].markAsTouched();
      }

      if (this.valForm.valid) {
        // Set loading indicator and remove warning
        this.loading = true;
        this.loginFailed = false;

        if (value.email && value.password) {
        this.authService.login(value.email, value.password)
          .subscribe(
            success => {
              console.log('User is logged in');
              this.router.navigateByUrl('/');
            },
            error => {
              // Show error
              this.loading = false;
              this.loginFailed = true;
            }
          );
        }
      }
    }

    public logout() {
        this.authService.logout();
    }

    ngOnInit() { }

}
