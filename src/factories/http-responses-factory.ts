import { Response } from 'express'
import { Responses } from '../controllers/responses'

export function httpResponsesFactory (response: Response): Responses {
  return new Responses(response)
}
