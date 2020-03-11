import { LoginUserService } from './login-user.service';
import { ValidateService } from './../../shared/services/helpers/validate.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  formLogin: FormGroup;
  formErr = {
    userName: '',
    password: ''
  };
  validateMess = {
    userName: {
      require: 'Please Enter Your Email',
      pattern: 'Must Be A Email'
    },
    password: {
      require: 'Please Enter Your Password'
    }
  };
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private loginService: LoginUserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      userName: ['', [Validators.required, , Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')]],
      password: ['', [Validators.required]]
    });
    this.formLogin.valueChanges.subscribe(() => {
      this.validateService.getValidate(
        this.formLogin, this.formErr, this.validateMess
      );
    });
  }

  login() {
    const body = {
      user_mail: this.formLogin.value.userName,
      password: this.formLogin.value.password
    };
    console.log(body);
    this.loginService.login(body).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
