import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Creamcheese',2),
        new Ingredient('Blueberries',40)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    onIngredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);//es6 feature '...' spread operator
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}