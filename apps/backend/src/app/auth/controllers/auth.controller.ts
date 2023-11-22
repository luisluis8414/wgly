import {
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { JwtAuthGuard, DiscordAuthGuard } from '../utils/Guards'
import { AuthService } from '../services/auth.service'
import { User } from '@prisma/client'

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService
  ) {}

  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Req() req: Request, @Res() res: Response) {
    res.cookie('jwt', this.authService.generateJwt(req.user as User), {
      httpOnly: true,
      secure: false,
    })
    res.redirect(process.env.FRONTEND_URL)
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status() {
    return { message: 'U are authorized' }
  }

  @Post('logout')
  logout() {
    return {
      
    }
  }
}
