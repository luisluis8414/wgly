import { Injectable } from '@nestjs/common'
import { FindOAuth2Params } from '../../models/types'
import { PrismaService } from '../../prisma.service'
import { OAuth2Credentials, User } from '@prisma/client'
import { IAuthService } from './interfaces/auth'

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: User) {
    return this.prismaService.client.user.create({
      data: user,
    })
  }

  async updateUser(user: User): Promise<User | null> {
    return this.prismaService.client.user.update({
      where: { discordId: user.discordId },
      data: user,
    })
  }

  async validateUser(user: User) {
    const userInstance = await this.findUser(user)
    return userInstance ? this.updateUser(user) : this.createUser(user)
  }

  findUser(user: User) {
    return this.prismaService.client.user.findUnique({
      where: {
        discordId: user.discordId,
      },
    })
  }
  async validateOAuth2(details: OAuth2Credentials) {
    const { discordId } = details
    const oauth2 = await this.findOAuth2({ discordId })
    return oauth2 ? this.updateOAuth2(details) : this.createOAuth2(details)
  }

  createOAuth2(details: OAuth2Credentials) {
    return this.prismaService.client.oAuth2Credentials.create({
      data: details,
    })
  }

  async updateOAuth2(details: OAuth2Credentials) {
    await this.prismaService.client.oAuth2Credentials.update({
      where: { discordId: details.discordId },
      data: details,
    })
    return details
  }

  findOAuth2(params: FindOAuth2Params) {
    return this.prismaService.client.oAuth2Credentials.findUnique({
      where: {
        discordId: params.discordId,
      },
    })
  }
}
