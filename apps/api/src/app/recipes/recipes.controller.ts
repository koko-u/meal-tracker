import { Controller, Get } from '@nestjs/common'
import { RecipeDocument } from '../schemas/recipe.schema'

@Controller('recipes')
export class RecipesController {
  @Get()
  async searchRecipes(): Promise<RecipeDocument[]> {
    console.log('search recipes')
    return []
  }
}
