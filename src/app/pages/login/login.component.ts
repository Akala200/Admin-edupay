import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';



const types = ['success', 'error', 'info', 'warning'];




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {


  // tslint:disable-next-line:no-inferrable-types
  isLoginError: boolean = false;
  private _loginUrl = 'https://reqres.in/api/login';
  options: GlobalConfig;
    model: any = {};
    loading = false;
    returnUrl: string;




  // tslint:disable-next-line:max-line-length
  constructor(private _auth: AuthService, private _router: Router, private http: HttpClient, public toastr: ToastsManager, vcr: ViewContainerRef, public toastrService: ToastrService) {
    this.options = this.toastrService.toastrConfig;
    this.toastr.setRootViewContainerRef(vcr);
  }

  OnSubmit(userName, password) {
    this._auth.loginUser(userName, password).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token)
      this._router.navigate(['../pages/dashboard'])
    },
    (err: HttpErrorResponse) => {

      console.log(err.error);
      console.log(err.name);
      console.log(err.message);
      console.log(err.status);
      this.toastrService.error('Please try again', 'Unable to log in');
    });
  }

  }



