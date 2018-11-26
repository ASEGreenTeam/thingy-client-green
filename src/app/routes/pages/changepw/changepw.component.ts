import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

    passForm: FormGroup;
  constructor(public authServ: AuthService,
              fb: FormBuilder) {
      const password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
      const confirmpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

      this.passForm = fb.group({
          'oldpassword': [null, Validators.required],
          'password': password,
          'confirmpassword': confirmpassword
      });
  }

  ngOnInit() {
  }

    submitForm($ev, value: any) {
        $ev.preventDefault();

        for (const c of Object.keys(this.passForm.controls)) {
            this.passForm.controls[c].markAsTouched();
        }
        if (this.passForm.valid) {
            this.authServ.changePassword(this.authServ.getId(), value.oldpassword, value.password).subscribe(success => {
                    alert(success);
                },
                error => {
                    alert(error);
                }
            );
        } else {
            alert('Requirements of the form are not given');
        }
        /* for (const c of Object.keys(this.passForm.controls)) {
             this.passForm.controls[c].markAsTouched();
         }
         for (const c of Object.keys(this.passwordForm.controls)) {
             this.passwordForm.controls[c].markAsTouched();
         }*/
    }
}
