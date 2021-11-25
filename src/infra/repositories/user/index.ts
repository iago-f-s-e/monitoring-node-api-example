import { UserHandlers } from '@src/infra/entities'
import { IUserRepository } from './contracts/user-repository'
import { WriteRepository } from './write-repository'

export class UserRepository extends WriteRepository implements IUserRepository {
  constructor (userHandlers: UserHandlers) {
    super(userHandlers)
  }
}
