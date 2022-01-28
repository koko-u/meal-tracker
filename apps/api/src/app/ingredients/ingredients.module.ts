import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Ingredient, IngredientSchema } from '../schemas/ingredient.schema'
import { IngredientsController } from './ingredients.controller'
import { IngredientsService } from './ingredients.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
  exports: [MongooseModule],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
