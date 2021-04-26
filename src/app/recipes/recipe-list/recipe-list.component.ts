import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 

  recipes: Recipe[];

  constructor(private recipeSerivce: RecipeService,
             private router: Router,
             private route: ActivatedRoute, 
             ) { }  //access to recipe.service.ts

  ngOnInit() {
    this.recipes= this.recipeSerivce.getRecipes();
  }
 
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
