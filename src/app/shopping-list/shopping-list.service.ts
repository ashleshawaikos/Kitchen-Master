import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService{
    
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing= new Subject<number>();

    private ingredients:Ingredient[] = [
        new Ingredient('Creamcheese',2),
        new Ingredient('Blueberries',40)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    onIngredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);//es6 feature '...' spread operator
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}