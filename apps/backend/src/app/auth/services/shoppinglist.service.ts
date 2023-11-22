import { Injectable } from '@nestjs/common'
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

@Injectable()
export class ShoppingListService {
  getList(): ShoppingItem[] {
    return shoppingList
  }

  addItem(name: string, quantity: number): ShoppingItem[] {
    const lastId =
      shoppingList.length > 0
        ? Math.max(...shoppingList.map((item) => item.id))
        : 0

    const newItem: ShoppingItem = {
      id: lastId + 1,
      name: name,
      quantity: quantity,
    }

    shoppingList.push(newItem)
    return shoppingList
  }
}
