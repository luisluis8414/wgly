import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common'
import { ShoppingListService } from '../services/shoppinglist.service'
import { ShoppingItem } from '@prisma/client'

@Controller('shoppinglist')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingListService) {}

  @Get()
  async list(): Promise<ShoppingItem[]> {
    return await this.shoppingService.getList()
  }

  @Post()
  async add(
    @Body() createItem: { name: string; quantity: number }
  ): Promise<ShoppingItem[]> {
    return this.shoppingService.addItem(createItem.name, createItem.quantity)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.shoppingService.delete(Number(id))
  }

  @Post('delete')
  async deleteBatch(@Body() ids: number[]): Promise<ShoppingItem[]> {
    return await this.shoppingService.deleteBatch(ids)
  }
}
