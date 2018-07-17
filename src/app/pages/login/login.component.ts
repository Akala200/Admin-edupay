import { Component, ViewEncapsulation, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import {User} from '../../model/user.model';
import { Credentials } from '../../model/uselogin.model';
import { LoginserviceService } from '../../services/loginservice.service';
import { UserComponent } from '../user/user.component';





const types = ['success', 'error', 'info', 'warning'];




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { email: '', password: '' };
  model: any = {};



  // tslint:disable-next-line:max-line-length
  constructor(private userService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, public toastrService: ToastrService) { }

    ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];
         this.credentials.email = param['email'];
      });

  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }



  login() {
    this.userService.login(this.model.username, this.model.password)
.subscribe(
  res => {
    this.router.navigate(['pages/dashboard']);
    this.toastrService.success('User successfully updated', 'Success!');
},
(err: HttpErrorResponse) => {
  this.toastrService.error('An error occured ', 'Try again!');
  if (err.error instanceof Error) {
    console.log('Client-side error occured.');
  } else {
    console.log('Server-side error occured.');
  }
})
}
}
