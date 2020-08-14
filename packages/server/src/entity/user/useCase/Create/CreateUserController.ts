import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { identification, firstName, lastName, email, phone, password } = request.body

    try {

      await this.createUserUseCase.execute( { identification, firstName, lastName, email, phone, password })

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }

  }
}
