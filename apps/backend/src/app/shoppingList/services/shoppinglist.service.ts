import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaClient, ShoppingItem } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ShoppingListService {
  async getList(): Promise<ShoppingItem[]> {
    return await prisma.shoppingItem.findMany()
  }

  async addItem(name: string, quantity: number): Promise<ShoppingItem[]> {
    try {
      await prisma.shoppingItem.create({
        data: {
          name: name,
          quantity: quantity,
        },
      })
      return await this.getList()
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

  async deleteItem(id: number): Promise<void> {
    try {
      await prisma.shoppingItem.delete({
        where: {
          itemId: id,
        },
      })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
