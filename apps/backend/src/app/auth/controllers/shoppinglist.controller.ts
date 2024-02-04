import { Controller, Get, Query } from '@nestjs/common'
import { ShoppingItem } from '../../models/shopping-item.model'
import { ShoppingListService } from '../services/shoppinglist.service'

@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingListService) {}
  @Get('list')
  list(): ShoppingItem[] {
    return this.shoppingService.getList()
  }

  @Get('add')
  add(@Query() params: { name: string; quantity: string }): ShoppingItem[] {
    return this.shoppingService.addItem(params.name, Number(params.quantity))
  }
}
