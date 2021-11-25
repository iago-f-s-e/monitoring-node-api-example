import { IReadRepository } from './read-repository'
import { IWriteRepository } from './write-repository'

export interface IUserRepository extends IWriteRepository, IReadRepository {}
