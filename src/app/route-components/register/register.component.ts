import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}
  onRegisterSubmit(event: any, form: NgForm) {
    const user = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      userName: form.value.userName,
      email: form.value.email,
      password: form.value.password,
    };
    event.preventDefault();
    this.authService.registerUser(user).subscribe((response: any) => {
      console.log('resp', response.data);
    });
  }
}
