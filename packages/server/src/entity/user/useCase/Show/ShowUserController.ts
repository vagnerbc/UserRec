import { Request, Response } from "express";
import { ShowUserUseCase } from "./ShowUserUseCase";

export class ShowUserController {

  constructor(
    private showUserUseCase: ShowUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.showUserUseCase.execute( )

      return response.status(200).send(users);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }

  }
}
