import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipesService } from 'src/app/services/recipe-service/recipes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any = null;
  constructor(
    private readonly store: Store,
    private recipeService: RecipesService
  ) {
    this.store.subscribe((state: any) => {
      const store = state;
      this.user = store.appState.user;
    });
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe((response) => {
      console.log('response', response);
    });
  }

  onAddRecipeSubmit(recipeForm: any) {
    console.log('submit', recipeForm);

    const formValues = recipeForm.form.value;
    const recipe = {
      title: formValues.name,
      subtitle: formValues.shortDescription,
      author: {
        _id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userName: this.user.userName,
      },
      link: formValues.link,
      easeOfMaking: formValues.easeOfMaking,
      description: formValues.description,
    };
    console.log(recipe);
    this.recipeService.postRecipe(recipe).subscribe((response) => {
      console.log('posting recipe', response);
      recipeForm.reset();
    });
  }
}
