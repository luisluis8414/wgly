import { Injectable } from '@nestjs/common'
import { PrismaClient, ShoppingItem } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ShoppingListService {
  async getList(): Promise<ShoppingItem[]> {
    return await prisma.shoppingItem.findMany()
  }

  async addItem(name: string, quantity: number): Promise<ShoppingItem[]> {
    await prisma.shoppingItem.create({
      data: {
        name: name,
        quantity: quantity,
      },
    })
    return await this.getList()
  }
}
