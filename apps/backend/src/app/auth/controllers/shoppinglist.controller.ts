import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../utils/Guards'
import { ShoppingItem } from '../../models/shopping-item.model'
import { ShoppingListService } from '../services/shoppinglist.service'

@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingListService) {}
  @Get('list')
  @UseGuards(JwtAuthGuard)
  list(): ShoppingItem[] {
    return this.shoppingService.getList()
  }

  @Get('add')
  @UseGuards(JwtAuthGuard)
  add(@Query() params: { name: string; quantity: string }): ShoppingItem[] {
    return this.shoppingService.addItem(params.name, Number(params.quantity))
  }
}
