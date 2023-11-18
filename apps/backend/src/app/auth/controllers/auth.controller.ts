import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards'

@Controller('auth')
export class AuthController {
  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  redirect() {
    return { msg: 'Redirect' }
  }

  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req
  }

  @Post('logout')
  logout() {
    return {}
  }
}
