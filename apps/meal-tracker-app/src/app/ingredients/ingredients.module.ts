import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddIngredientComponent } from '../pages/add-ingredient/add-ingredient.component'
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component'
import { MealsListComponent } from './meals-list/meals-list.component'
import { IngredientsService } from './ingredients.service'
import { MealsService } from './meals.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    AddIngredientComponent,
    IngredientsListComponent,
    MealsListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MealsListComponent, IngredientsListComponent],
  providers: [IngredientsService, MealsService],
})
export class IngredientsModule {}
