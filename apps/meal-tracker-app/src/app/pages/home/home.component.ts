import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { IngredientsService } from '../../ingredients/ingredients.service'
import { MealsService } from '../../ingredients/meals.service'
import { IIngredient, IMeal } from '@meal-tracker/api-interfaces'

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  isLoadingMeals = true
  isLoadingIngredients = true

  meals: IMeal[] = []
  ingredients: IIngredient[] = []

  constructor(
    private ingredientsService: IngredientsService,
    private mealsService: MealsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe((meals) => {
      this.meals = meals
      this.isLoadingMeals = false
    })
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients
      this.isLoadingIngredients = false
    })
  }

  async navigateToShoppingList() {
    await this.router.navigate(['shopping-list'])
  }

  onDeleteMeal(mealId: string) {
    this.mealsService
      .deleteById(mealId)
      .subscribe((updatedMeals) => (this.meals = updatedMeals))
  }

  onDeleteIngredient(ingredientName: string) {
    this.ingredientsService
      .deleteByName(ingredientName)
      .subscribe(
        (updatedIngredients) => (this.ingredients = updatedIngredients),
      )
  }
}
