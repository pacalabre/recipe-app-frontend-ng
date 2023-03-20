import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../app/models/User';

@Component({
  selector: 'storybook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Input()
  links: any[] | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
