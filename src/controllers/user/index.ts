import { ChildControllers, Controller } from '@overnightjs/core'
import { UserPost } from './user-post'

@Controller('user')
@ChildControllers([
  new UserPost()
])
export class UserController {}
