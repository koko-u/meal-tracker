import { Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { IIngredient } from '@meal-tracker/api-interfaces'

@Controller('ingredients')
export class IngredientsController {
  @Get()
  async getIngredients(): Promise<IIngredient[]> {
    console.log('get ingredients')
    return []
  }

  @Post()
  async addIngredient(): Promise<void> {
    console.log('add ingredient')
  }

  @Delete(':name')
  async deleteIngredient(@Param() name: string): Promise<void> {
    console.log(`delete ingredient: ${name}`)
  }
}
