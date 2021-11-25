import { typeormHandlers } from '@src/infra/database/helpers'
import { User } from '@src/infra/entities'
import { UserRepository } from '@src/infra/repositories'
import { UserServices } from '@src/services'
import { Services } from '@src/types/services'

export function servicesFactory (): Services {
  return {
    user: new UserServices(new UserRepository(typeormHandlers(User)))
  }
}
