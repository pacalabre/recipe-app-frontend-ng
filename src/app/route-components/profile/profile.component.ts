import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any = null;
  constructor(private readonly store: Store) {
    this.store.subscribe((state: any) => {
      const store = state;
      this.user = store.appState.user;
    });
  }
}
