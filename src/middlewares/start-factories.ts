import { servicesFactory } from '@src/factories/services-factory'
import { NextFunction, Request, Response } from 'express'

export function startFactories (request: Request, response: Response, next: NextFunction): void {
  request.services = servicesFactory()

  next()
}
