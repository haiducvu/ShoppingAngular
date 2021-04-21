import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged= new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientss(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients); 
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}