import { Module } from '@nestjs/common'
import { AuthController } from './controllers/auth.controller'
import { AuthService } from './services/auth.service'
import { DiscordStrategy } from './utils/DiscordStrategy'
import { SessionSerializer } from './utils/SessionSerializer'
import { PrismaService } from '../prisma.service'

@Module({
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    PrismaService,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
