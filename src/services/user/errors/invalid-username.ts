import { AppError } from '@src/errors'

export class InvalidUsernameError extends Error implements AppError {
  constructor (username: string) {
    super(`The username "${username}" already exists`)
    this.name = 'InvalidUsernameError'
  }
}
