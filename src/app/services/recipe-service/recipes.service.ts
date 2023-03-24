import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  url: string = `http://localhost:3001/api/recipes`;

  getRecipes() {
    return this.http.get(`${this.url}`, { withCredentials: true });
  }

  postRecipe(recipe: any) {
    return this.http.post(`${this.url}`, recipe);
  }
}
