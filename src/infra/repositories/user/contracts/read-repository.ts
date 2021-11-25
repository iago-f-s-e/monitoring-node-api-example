import { IUser } from '@src/infra/entities'

export interface IReadRepository {
  findByUsername: (userName: string) => Promise<IUser | undefined>
}
