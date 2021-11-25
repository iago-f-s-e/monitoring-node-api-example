import { IUser, UserHandlers, ValidatedUser } from '@src/infra/entities'
import { IWriteRepository } from './contracts/write-repository'
import { ReadRepository } from './read-repository'

export class WriteRepository extends ReadRepository implements IWriteRepository {
  constructor (userHandlers: UserHandlers) {
    super(userHandlers)
  }

  private create (data: ValidatedUser): IUser {
    return this.userHandlers.repository.create(data)
  }

  public insert (data: ValidatedUser): Promise<IUser> {
    return this.userHandlers.repository.save(this.create(data))
  }
}
