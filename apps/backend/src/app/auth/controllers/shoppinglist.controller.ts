import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../utils/Guards'
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
export class AuthController {
  @Get('list')
  @UseGuards(JwtAuthGuard)
  status(): ShoppingItem[] {
    return shoppingList
  }
}
