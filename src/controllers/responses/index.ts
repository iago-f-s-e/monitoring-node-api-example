import { Response } from 'express'

import { ControllerError } from '@src/errors'
import { conflictLogger } from '@src/infra/monitoring/log/helpers'

class ServerError extends Error implements ControllerError {
  constructor (reason: string) {
    super(`Server error: ${reason}`)
    this.name = `ServerError: ${reason}`
  }
}

export class Responses {
  constructor (private readonly response: Response) {}

  public created (data?: any): Response {
    return this.response.status(201).json(data)
  }

  public badRequest (error: any): Response {
    return this.response.status(400).json({ error: error.message })
  }

  public conflict (error: any): Response {
    conflictLogger.error(error.message)
    return this.response.status(409).json({ error: error.message })
  }

  public serverError (message: string): Response {
    return this.response.status(500).json({ error: new ServerError(message).message })
  }
}
