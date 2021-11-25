export interface DomainError {
  message: string
}

export interface AppError extends DomainError{}

export interface ControllerError extends DomainError {}
