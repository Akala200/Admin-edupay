import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent  {

 logoutUserData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  logoutUser() {
    this._auth.logoutUser(this.logoutUserData);
}

}
