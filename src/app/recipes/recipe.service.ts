import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{

    // recipeSelected = new Subject<Recipe>();
    recipesChanged= new Subject<Recipe[]>();
    private recipes : Recipe[]=[];
    
    // private recipes: Recipe[]=[
    //     new Recipe("Blueberry Cheesecake", 
    //     "Yummy looking, soft, juicy cheesecake!",
    //     "https://domesticgothess.com/wp-content/uploads/2019/07/vegan-lemon-blueberry-cheesecake.jpg",
    //     [
    //         new Ingredient("Blueberries", 30),
    //         new Ingredient('Sugar',2)
    //     ]),
    //     new Recipe("Mushroom Linguine", 
    //     "Easy, healthy, vegetarian and delicious!",
    //     "https://domesticgothess.com/wp-content/uploads/2017/06/easy-mushroom-linguine.jpg",
    //     [
    //         new Ingredient("Chestnut Mushrooms",25),
    //         new Ingredient("Lemon",1)
    //     ])
    
    //   ];

      constructor( private shoppingListService: ShoppingListService) {
      }

      setRecipes(recipes: Recipe[]){
          this.recipes= recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe:Recipe){
          this.recipes[index]=newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());        
      }

}