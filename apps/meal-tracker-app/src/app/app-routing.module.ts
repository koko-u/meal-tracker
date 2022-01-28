import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { RecipeSearchComponent } from './pages/recipe-search/recipe-search.component'
import { AddIngredientComponent } from './pages/add-ingredient/add-ingredient.component'
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeSearchComponent },
  { path: 'add-ingredient', component: AddIngredientComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
