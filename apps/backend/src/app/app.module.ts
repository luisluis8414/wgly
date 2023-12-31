import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { AuthService } from './auth/services/auth.service'
import { ShoppingController } from './auth/controllers/shoppinglist.controller'
import { ShoppingListService } from './auth/services/shoppinglist.service'

@Module({
  imports: [AuthModule],
  controllers: [AppController, ShoppingController],
  providers: [AppService, PrismaService, AuthService, ShoppingListService],
})
export class AppModule {}
