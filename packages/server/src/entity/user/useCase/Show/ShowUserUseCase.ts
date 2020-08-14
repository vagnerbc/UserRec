import { IUserRepository } from "../../repository/IUserRepository";
import { IShowUserDTO } from "./ShowUserDTO";

export class ShowUserUseCase {

  constructor(
    private usersRepository: IUserRepository,
  ) {}

  async execute(): Promise<IShowUserDTO[]> {
    const users = await this.usersRepository.findAll()

    return users;
  }
}
