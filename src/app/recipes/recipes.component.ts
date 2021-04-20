import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }
 
  ngOnInit() {
    this.recipeService.recipSelected.subscribe(
      (recipe: Recipe)=>{
        this.selectedRecipe= recipe;
      }
    )
  }

}
