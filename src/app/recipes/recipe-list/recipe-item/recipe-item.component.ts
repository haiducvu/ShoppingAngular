import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipSelected: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipSelected.recipSelected.emit(this.recipe);
  }

}
