import { UserRepository } from '@src/infra/repositories'
import { IUserServices } from './contracts/user-services'
import { WriteServices } from './write-services'

export class UserServices extends WriteServices implements IUserServices {
  constructor (userRepository: UserRepository) {
    super(userRepository)
  }
}
