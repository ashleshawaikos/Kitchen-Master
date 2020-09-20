import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from "../store/app.reducer";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  ingredients : Observable < {ingredients:Ingredient[]}>;

  constructor(private loggingService : LoggingService,
              private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.ingredients =this.store.select('shoppingList');
    // this.store.select('shoppingList').subscribe()  // alternative way to retrieve data from the observable instead of using async pipe in the html


    // this.ingredients=this.shoppingListService.getIngredients();
    // this.subscription= this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[])=>{
    //     this.ingredients=ingredients;
    //   }
    // );

    // this.loggingService.printLog('Hell - shopping list.');
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();    
  }
  onEditItem(index:number){
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));


  }
}
