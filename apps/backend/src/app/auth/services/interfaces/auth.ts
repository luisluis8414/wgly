import { OAuth2Credentials, User } from '@prisma/client'
import { FindOAuth2Params, FindUserParams } from '../../../models/types'

export interface IAuthService {
  validateUser(datails: User): Promise<User>
  createUser(details: User): Promise<User>
  updateUser(details: User): Promise<User>
  findUser(params: FindUserParams): Promise<User>
  validateOAuth2(details: OAuth2Credentials): Promise<OAuth2Credentials>
  createOAuth2(details: OAuth2Credentials): Promise<OAuth2Credentials>
  updateOAuth2(details: OAuth2Credentials): Promise<OAuth2Credentials>
  findOAuth2(params: FindOAuth2Params): Promise<OAuth2Credentials>
}
