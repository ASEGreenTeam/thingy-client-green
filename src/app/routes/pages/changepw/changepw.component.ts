import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

    passForm: FormGroup;
  constructor(fb: FormBuilder) {
      const password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
      const certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

      this.passForm = fb.group({
          'password': password,
          'confirmPassword': certainPassword
      });
  }

  ngOnInit() {
  }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        /* for (const c of Object.keys(this.passForm.controls)) {
             this.passForm.controls[c].markAsTouched();
         }
         for (const c of Object.keys(this.passwordForm.controls)) {
             this.passwordForm.controls[c].markAsTouched();
         }*/
    }
}
