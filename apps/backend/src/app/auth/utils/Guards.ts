import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest()
    await super.logIn(request)
    return activate
  }
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const jwt = request.cookies['jwt']
    if (!jwt) {
      throw new UnauthorizedException()
    }
    try {
      const decoded = this.jwtService.verify(jwt)
      request.user = decoded
      return true
    } catch (error) {
      console.error('JWT Verification error:', error)
      throw new UnauthorizedException()
    }
  }
}
