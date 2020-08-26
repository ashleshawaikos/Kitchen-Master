import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[]=[
        new Recipe("Blueberry Cheesecake", 
        "Yummy looking, soft, juicy cheesecake!",
        "https://domesticgothess.com/wp-content/uploads/2019/07/vegan-lemon-blueberry-cheesecake.jpg",
        [
            new Ingredient("Blueberries", 30),
            new Ingredient('Sugar',2)
        ]),
        new Recipe("Mushroom Linguine", 
        "Easy, healthy, vegetarian and delicious!",
        "https://domesticgothess.com/wp-content/uploads/2017/06/easy-mushroom-linguine.jpg",
        [
            new Ingredient("Chestnut Mushrooms",25),
            new Ingredient("Lemon",1)
        ])
    
      ];

      constructor( private shoppingListService: ShoppingListService) {
      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

    //   recipeSelected

}