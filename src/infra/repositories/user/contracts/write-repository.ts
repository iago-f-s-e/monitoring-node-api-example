import { IUser, ValidatedUser } from '@src/infra/entities'

export interface IWriteRepository {
  insert: (data: ValidatedUser) => Promise<IUser>
}
