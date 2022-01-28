import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RecipesModule } from './recipes/recipes.module'
import { IngredientsModule } from './ingredients/ingredients.module'
import { MealsModule } from './meals/meals.module'
import { ShoppingModule } from './shopping/shopping.module'

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`

@Module({
  imports: [
    MongooseModule.forRoot(url),
    RecipesModule,
    IngredientsModule,
    MealsModule,
    ShoppingModule,
  ],
})
export class AppModule {}
