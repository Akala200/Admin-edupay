import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  // tslint:disable-next-line:no-inferrable-types
  isLoginError: boolean = false;
  loginUserData = {}

  constructor(private _auth: AuthService, private _router: Router ) {

  }

  OnSubmit(email, password) {
    this._auth.loginUser(email, password).subscribe((data: any) => {
        localStorage.setItem('token', data.access_token);
        this._router.navigate(['../pages/dashboard']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
    }


  // tslint:disable-next-line:use-life-cycle-interface


}
