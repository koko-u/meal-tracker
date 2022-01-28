import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './pages/home/home.component'
import { AddIngredientComponent } from './pages/add-ingredient/add-ingredient.component'
import { RecipeSearchComponent } from './pages/recipe-search/recipe-search.component'
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component'
import { AppRoutingModule } from './app-routing.module'
import { IngredientsModule } from './ingredients/ingredients.module'
import { RecipesModule } from './recipes/recipes.module'
import { ShoppingModule } from './shopping/shopping.module';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IngredientsModule,
    RecipesModule,
    ShoppingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
