import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // selectedRecipe:Reciype;
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe)=>{
    //     this.selectedRecipe=recipe;
    //   }
    // );
  }

}
