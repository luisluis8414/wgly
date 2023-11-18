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
    const jwt = this.authService.generateJwt(req.user as User)
    res.cookie('jwt', jwt, { httpOnly: true, secure: false })
    const frontendUrl = 'http://localhost:4200'
    res.redirect(frontendUrl)
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log(req)
    return 'test'
  }

  @Post('logout')
  logout() {
    return {}
  }
}
