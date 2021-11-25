import { ValidatedUser } from './validated-user'

export interface IUser extends ValidatedUser {
  userId: string
  version: number
}
