import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../common/validator.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  special = '&#@';

  people = {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initListMyForm();
  }

  initListMyForm() {
    this.myForm = this.fb.group({
        username: ['', [
          Validators.required,
          Validators.maxLength(8),
          ValidatorService.specialcode
        ]],
        qqemail: ['', [
          ValidatorService.email
        ]],
    });
  }

  get username() {
    return this.myForm.get('username');
  }
  get qqemail() {
    return this.myForm.get('qqemail');
  }

  getValue() {
    this.people = {
      username: this.myForm.value.username,
      qqemail: this.myForm.value.qqemail
    };

  }

}
