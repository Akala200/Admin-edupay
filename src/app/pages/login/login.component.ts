import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { HttpErrorResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService, GlobalConfig } from 'ngx-toastr';



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
  loginUserData = {};
  private _loginUrl = 'https://reqres.in/api/login';
  options: GlobalConfig;



  // tslint:disable-next-line:max-line-length
  constructor(private _auth: AuthService, private _router: Router, private http: HttpClient, public toastr: ToastsManager, vcr: ViewContainerRef, public toastrService: ToastrService) {
    this.options = this.toastrService.toastrConfig;
    this.toastr.setRootViewContainerRef(vcr);
  }

  loginUser(email, password, rememberMe) {
    console.log(email, password, rememberMe);

    const body = JSON.stringify({ email: email, password: password, rememberMe: rememberMe});
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this._loginUrl + '/token', body, {  headers: headers }).subscribe(
      res => {
        console.log(res);
        this.toastrService.success('You are successfully logged in!', 'Success!');
        this. _router.navigateByUrl('/pages/dashboard')
      },
      (err: HttpErrorResponse) => {

        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
        this.toastrService.error('Please try again', 'Unable to log in');
      }
    )
  }


  // tslint:disable-next-line:use-life-cycle-interface


}
