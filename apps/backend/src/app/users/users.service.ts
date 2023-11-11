import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { IUserService } from './interfaces/user.interface'

@Injectable()
export class UsersService implements IUserService {
  constructor(private readonly prisma: PrismaService) {}
}
