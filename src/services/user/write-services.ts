import { left, right } from '@src/shared/either'
import { ValidatedUser } from '@src/infra/entities'
import { UserRepository } from '@src/infra/repositories'
import { IWriteServices, WriteServicesResponse } from './contracts/write-services'
import { InvalidUsernameError } from './errors/invalid-username'

export class WriteServices implements IWriteServices {
  constructor (private userRepository: UserRepository) {}

  public async add (data: ValidatedUser): Promise<WriteServicesResponse> {
    const usernameExists = await this.userRepository.findByUsername(data.username)

    if (usernameExists) return left(new InvalidUsernameError(data.username))

    return right(await this.userRepository.insert(data))
  }
}
