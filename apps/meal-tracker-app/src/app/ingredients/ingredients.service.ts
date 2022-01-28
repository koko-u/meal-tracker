import { Injectable } from '@angular/core'
import { concatMap, Observable } from 'rxjs'
import { IIngredient } from '@meal-tracker/api-interfaces'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<IIngredient[]> {
    return this.http.get<IIngredient[]>('/api/ingredients')
  }

  deleteByName(ingredientName: string): Observable<IIngredient[]> {
    return this.http
      .delete(`/api/ingredients/${ingredientName}`)
      .pipe(concatMap(() => this.getIngredients()))
  }
}
