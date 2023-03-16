import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  currentUser: any;
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  onLoginSubmit(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password,
    };
    this.authService.login(user).subscribe((response: any) => {
      if (response.userId) {
        localStorage.setItem('userId', response.userId);
        this.userService.getUser(response.userId).subscribe((response: any) => {
          console.log('user response', response);
        });
      }
    });
  }
}
