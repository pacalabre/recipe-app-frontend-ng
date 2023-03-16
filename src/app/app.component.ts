import { Component } from '@angular/core';
import { User } from './../stories/User';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app-frontend-ng';
  user: any = null;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
