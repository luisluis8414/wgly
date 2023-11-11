import { Module } from '@nestjs/common'
import { AuthController } from './controllers/auth.controller'
import { AuthService } from './services/auth.service'
import { DiscordStrategy } from './utils/DiscordStrategy'
import { SessionSerializer } from './utils/SessionSerializer'

@Module({
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
