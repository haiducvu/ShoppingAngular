import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipSelected= new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test', 
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
             new Ingredient('Meat',1),
             new Ingredient('French Fries',10),
         ],
         ),
        new Recipe('Another Test Recipe', 
        'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
            new Ingredient('Orange',1),
            new Ingredient('Apple',10),
         ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}