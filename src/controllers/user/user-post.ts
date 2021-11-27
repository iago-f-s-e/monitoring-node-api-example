import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { IUserPost } from './contracts/user-post'

@Controller('')
export class UserPost implements IUserPost {
  @Post('')
  public async create (request: Request): Promise<Response> {
    const { services, responses } = request

    try {
      const userOrError = await services.user.add(request.body)

      if (userOrError.isLeft()) {
        return responses.conflict(userOrError.value)
      }

      return responses.created()
    } catch (error: any) {
      return responses.serverError(error.message)
    }
  }
}
