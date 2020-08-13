import { IUsersRepository } from "@repositories/IUsersRepository";
import { IMailProvider } from "@providers/IMailProviders";
import { IShowUserDTO } from "./ShowUserDTO";
import { encryptValue } from "@utils/index";
import { User } from "@entities/User";

export class ShowUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IShowUserDTO[]> {
    const users = await this.usersRepository.findAll()

    return users;
  }
}
