import { MailtrapMailProvider } from "@providers/Impl/MailtrapMailProvider"
import { MongoUsersRepository } from "@repositories/Impl/MongoUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController}
