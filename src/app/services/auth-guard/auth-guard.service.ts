import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authservice: AuthService, private route: Router) {}

  canActivate() {
    if (this.authservice.isAuthenticated()) {
      console.log('user is authed');
      return true;
    }
    console.log('user is not authed');
    this.route.navigate(['login']);
    return false;
  }
}
