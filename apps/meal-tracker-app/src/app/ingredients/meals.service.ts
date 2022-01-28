import { Injectable } from '@angular/core'
import { concatMap, Observable } from 'rxjs'
import { IMeal } from '@meal-tracker/api-interfaces'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class MealsService {
  constructor(private http: HttpClient) {}

  getMeals(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>('/api/meals')
  }

  deleteById(mealId: string): Observable<IMeal[]> {
    return this.http
      .delete(`/api/meals/${mealId}`)
      .pipe(concatMap(() => this.getMeals()))
  }
}
