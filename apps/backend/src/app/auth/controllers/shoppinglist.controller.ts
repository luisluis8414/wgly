import { Controller, Get } from '@nestjs/common'
import { ShoppingItem } from '../../models/shopping-item.model'

const shoppingList: ShoppingItem[] = [
  {
    id: 1,
    name: 'senf',
    quantity: 10,
  },
  {
    id: 2,
    name: 'butter',
    quantity: 3,
  },
  {
    id: 3,
    name: 'milch',
    quantity: 1,
  },
]

@Controller('shopping')
export class ShoppingController {
  @Get('list')
  status(): ShoppingItem[] {
    return shoppingList
  }
}
