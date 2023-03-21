import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  url: string = `http://localhost:3001/api/auth`;

  registerUser(user: any) {
    return this.http.post(`${this.url}/register`, user);
  }

  login(user: any) {
    return this.http.post(`${this.url}/login`, user);
  }

  logout() {
    return this.http.post(`${this.url}/logout`, {});
  }

  isAuthenticated() {
    let user = localStorage.getItem('userId');
    if (user) {
      return true;
    }
    return false;
  }
}
