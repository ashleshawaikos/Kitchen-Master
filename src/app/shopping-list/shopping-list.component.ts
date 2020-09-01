import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  // ingredients:Ingredient[] = [
  //   new Ingredient('Creamcheese',2),
  //   new Ingredient('Blueberries',40)
  // ];
  private subscription:Subscription;
  ingredients;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.subscription= this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
}
