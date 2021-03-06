/* eslint-disable */
import { Responses } from '@src/controllers/responses'
import * as http from 'http'
import { Services } from './services'

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    services: Services
    responses: Responses
  }
}
