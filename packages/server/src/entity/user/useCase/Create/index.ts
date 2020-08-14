import { MailtrapMailProvider } from "@provider/mail/MailtrapMailProvider"
import { MongoUserRepository } from "../../repository/MongoUserRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUsersRepository = new MongoUserRepository()

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController}
