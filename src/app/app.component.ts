import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Actions from '../app/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app-frontend-ng';
  user: any = null;

  constructor(
    private authService: AuthService,
    private readonly store: Store<any>,
    private route: Router
  ) {
    this.store.subscribe((state) => {
      const store = state;
      this.user = store.appState.user;
    });
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(Actions.updateUser({ user: null }));
    this.route.navigate(['login']);
  }
}
