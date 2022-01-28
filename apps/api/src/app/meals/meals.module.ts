import { Module } from '@nestjs/common'
import { MealsService } from './meals.service'
import { MealsController } from './meals.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Meal, MealSchema } from '../schemas/meal.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  exports: [MongooseModule],
  providers: [MealsService],
  controllers: [MealsController],
})
export class MealsModule {}
