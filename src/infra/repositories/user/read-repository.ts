import { IUser, UserHandlers } from '@src/infra/entities'
import { IReadRepository } from './contracts/read-repository'

export class ReadRepository implements IReadRepository {
  constructor (protected readonly userHandlers: UserHandlers) {}

  public findByUsername (username: string): Promise<IUser | undefined> {
    return this.userHandlers.repository.findOne({
      where: {
        username
      }
    })
  }
}
