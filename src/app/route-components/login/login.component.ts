import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  currentUser: any;
  constructor(private authService: AuthService) {}

  onLoginSubmit(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password,
    };
    this.authService.login(user).subscribe((response: any) => {
      if (response.userId) {
        localStorage.setItem('userId', response.userId);
      }
    });
  }

  logout() {
    localStorage.removeItem('userId');
  }
}
