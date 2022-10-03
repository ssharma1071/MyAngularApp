import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simple a test', 'https://pixnio.com/free-images/2021/04/22/2021-04-22-09-40-25-550x367.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test','https://pixnio.com/free-images/2021/04/22/2021-04-22-09-40-25-550x367.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
