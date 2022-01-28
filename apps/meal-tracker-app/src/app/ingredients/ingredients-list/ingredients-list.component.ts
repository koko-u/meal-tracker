import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'
import { IIngredient } from '@meal-tracker/api-interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'mt-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsListComponent implements OnInit {
  @Input()
  isLoading = true
  @Input()
  ingredients: IIngredient[] = []

  @Output()
  deleteIngredient = new EventEmitter<string>()

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async onAddIngredient() {
    await this.router.navigate(['add-ingredient'])
  }

  onDelete(ingredientName: string) {
    this.deleteIngredient.emit(ingredientName)
  }
}
