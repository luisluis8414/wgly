import { lucia } from 'lucia'
import { prisma } from '@lucia-auth/adapter-prisma'
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

const auth = lucia({
  env: 'DEV',
  adapter: prisma(client),
})

export type Auth = typeof auth
