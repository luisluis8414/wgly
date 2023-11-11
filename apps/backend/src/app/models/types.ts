import { OAuth2Credentials, User } from '@prisma/client'

export type FindUserParams = Partial<User>

export type FindOAuth2Params = Partial<OAuth2Credentials>

export type Done = (err: Error, user: User) => void
