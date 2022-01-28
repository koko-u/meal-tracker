import { Controller, Get } from '@nestjs/common'

@Controller('shopping-list')
export class ShoppingController {
  @Get()
  async getShoppingList(): Promise<any[]> {
    console.log('get shopping list')
    return []
  }
}
