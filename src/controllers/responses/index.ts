import { Response } from 'express'

import { ControllerError } from '@src/errors'

class ServerError extends Error implements ControllerError {
  constructor (reason: string) {
    super(`Server error: ${reason}`)
    this.name = `ServerError: ${reason}`
  }
}

export class Responses {
  constructor (private readonly response: Response) {}

  public ok (data?: any): Response {
    return this.response.status(200).json(data)
  }

  public noContent (): Response {
    return this.response.status(204).send()
  }

  public created (data?: any): Response {
    return this.response.status(201).json(data)
  }

  public badRequest (error: any): Response {
    return this.response.status(400).json({ error: error.message })
  }

  public unauthorized (): Response {
    return this.response.status(401).json({ error: 'Invalid data' })
  }

  public notFound (error: any): Response {
    return this.response.status(404).json({ error: error.message })
  }

  public conflict (error: any): Response {
    return this.response.status(409).json({ error: error.message })
  }

  public serverError (message: string): Response {
    return this.response.status(500).json({ error: new ServerError(message).message })
  }
}
