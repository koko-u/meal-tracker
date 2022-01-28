import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Meal, MealDocument } from '../schemas/meal.schema'
import { Model } from 'mongoose'

@Injectable()
export class MealsService {
  constructor(
    @InjectModel(Meal.name)
    private readonly ingredientModel: Model<MealDocument>,
  ) {}
}
