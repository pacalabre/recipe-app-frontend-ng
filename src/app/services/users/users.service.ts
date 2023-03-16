import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  url: string = `http://localhost:3001/api/users`;
  getUser(userId: string) {
    return this.http.get(`${this.url}/${userId}`);
  }
}
