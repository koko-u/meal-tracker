import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Recipe, RecipeDocument } from '../schemas/recipe.schema'
import { Model } from 'mongoose'

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly ingredientModel: Model<RecipeDocument>,
  ) {}
}
