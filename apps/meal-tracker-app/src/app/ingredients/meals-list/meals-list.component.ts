import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'
import { IMeal } from '@meal-tracker/api-interfaces'
import { Router } from '@angular/router'
import { add, isSameDay } from 'date-fns'

@Component({
  selector: 'mt-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealsListComponent implements OnInit {
  @Input()
  isLoading = true

  @Input()
  set meals(value: IMeal[]) {
    this._mealsForDays = this.next7days.map((day) =>
      value.find((meal) => isSameDay(meal.plannedDate, day)),
    )
  }

  @Output()
  deleteMeal = new EventEmitter<string>()

  get next7days(): Date[] {
    const today = new Date()
    return Array(7)
      .fill(0)
      .map((_, i) => add(today, { days: i }))
  }

  private _mealsForDays: (IMeal | undefined)[] = []
  get mealsForDays(): (IMeal | undefined)[] {
    return this._mealsForDays
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async navigateToRecipeSearchPage(day: Date) {
    await this.router.navigate(['recipes'], { queryParams: { day } })
  }

  onDelete(mealId: string) {
    this.deleteMeal.emit(mealId)
  }
}
