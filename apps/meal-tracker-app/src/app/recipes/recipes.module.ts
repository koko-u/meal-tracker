import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecipeSearchComponent } from '../pages/recipe-search/recipe-search.component';
import { RecipeSearchResultsListComponent } from './recipe-search-results-list/recipe-search-results-list.component'

@NgModule({
  declarations: [RecipeSearchComponent, RecipeSearchResultsListComponent],
  imports: [CommonModule],
})
export class RecipesModule {}
