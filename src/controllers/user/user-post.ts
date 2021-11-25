import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { IUserPost } from './contracts/user-post'

@Controller('')
export class UserPost implements IUserPost {
  @Post('')
  public async create (request: Request, response: Response): Promise<Response> {
    const { services } = request

    try {
      const userOrError = await services.user.add(request.body)

      if (userOrError.isLeft()) {
        return response.status(400).json(userOrError.value)
      }

      return response.status(201).json(userOrError.value)
    } catch (error: any) {
      return response.status(500).json(error.message)
    }
  }
}
