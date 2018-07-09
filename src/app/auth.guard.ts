import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

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
      if (this._authService.loggedIn()) {
        return true
      } else {
        this._router.navigate(['/login'])
        return false
      }
     }

  }

