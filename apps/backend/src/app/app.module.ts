import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { ShoppingListService } from './shoppingList/services/shoppinglist.service'
import { ShoppingController } from './shoppingList/controllers/shoppinglist.controller'

@Module({
  imports: [],
  controllers: [AppController, ShoppingController],
  providers: [AppService, PrismaService, ShoppingListService],
})
export class AppModule {}
