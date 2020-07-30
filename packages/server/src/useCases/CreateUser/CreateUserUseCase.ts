import { IUsersRepository } from "@repositories/IUsersRepository";
import { IMailProvider } from "@providers/IMailProviders";
import { ICreateUserDTO } from "./CreateUserDTO";
import { encryptValue } from "@utils/index";
import { User } from "@entities/User";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data);
    user.password = await encryptValue(user.password)

    await this.usersRepository.save(user)

    this.mailProvider.sendMail({
      to: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email
      },
      from: {
        name: 'Company',
        email: 'equipe.meuapp.com'
      },
      subject: 'Seja bem vindo a plataforma',
      body: '<p>Seja muito bem vindo a plataforma</p>'
    })
  }
}
