import { Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { IMeal } from '@meal-tracker/api-interfaces'

@Controller('meals')
export class MealsController {
  @Get()
  async getMeals(): Promise<IMeal[]> {
    console.log('get ingredients')
    return []
  }

  @Post()
  async addMeal(): Promise<void> {
    console.log('add meal')
  }

  @Delete(':id')
  async deleteMeal(@Param() id: string): Promise<void> {
    console.log(`delete meal: ${id}`)
  }
}
