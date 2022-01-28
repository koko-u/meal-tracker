import { Injectable } from '@nestjs/common'
import { Ingredient, IngredientDocument } from '../schemas/ingredient.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}
}
