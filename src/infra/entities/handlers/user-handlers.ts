import { TypeormHandlers } from '../../database/helpers'
import { User } from '../user'

export interface UserHandlers extends TypeormHandlers<User> {}
