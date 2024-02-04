import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { ShoppingController } from './auth/controllers/shoppinglist.controller'
import { ShoppingListService } from './auth/services/shoppinglist.service'

@Module({
  imports: [],
  controllers: [AppController, ShoppingController],
  providers: [AppService, PrismaService, ShoppingListService],
})
export class AppModule {}
