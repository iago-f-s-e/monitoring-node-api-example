import { IUser, ValidatedUser } from '@src/infra/entities'
import { Either } from '@src/shared/either'
import { InvalidUsernameError } from '../errors/invalid-username'

export type WriteServicesResponse = Either<InvalidUsernameError, IUser>

export interface IWriteServices {
  add: (data: ValidatedUser) => Promise<WriteServicesResponse>
}
