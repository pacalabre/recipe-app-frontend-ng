import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Actions from '../app/store/actions';
import { catchError, throwError } from 'rxjs';

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
    this.authService
      .logout()
      .pipe(
        catchError((error) => {
          console.log('Handling error locally and rethrowing it...', error);
          return throwError(() => error);
        })
      )
      .subscribe((response) => {
        if (response) {
          localStorage.removeItem('userId');
          this.store.dispatch(Actions.updateUser({ user: null }));
          this.route.navigate(['login']);
        }
      });
  }
}
