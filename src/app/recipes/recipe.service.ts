import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  recipeSelected= new EventEmitter<Recipe>();

   private recipes: Recipe[] =[
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat', 5),
            new Ingredient('Frech Fries', 5)
          ],
        ),
        new Recipe(
          'Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredient('Buns', 5),
            new Ingredient('Milk', 5)
          ]
        )
      ];

      constructor(private slService: ShoppingListService){}  // Using Injectable để kết nối 2 file service lại với nhau

      getRecipes(){
        return this.recipes.slice();  //copy recipe list because this array or obejct are reference types in JS
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }
}