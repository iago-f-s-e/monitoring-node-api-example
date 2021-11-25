import { Request, Response } from 'express'

export interface IUserPost {
  create: (request: Request, response: Response) => Promise<Response>
}
