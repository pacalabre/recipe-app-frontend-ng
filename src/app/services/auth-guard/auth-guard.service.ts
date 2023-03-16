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
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
}
