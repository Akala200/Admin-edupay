
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './services/auth.service'


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private _authService: AuthService, private _router: Router) { }


  canActivate(): boolean {
    console.log('i am checking to see if you are logged in');
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }

  canActivateChild(): boolean {
    console.log('checking child route access');
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
   }

}
