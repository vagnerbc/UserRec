import { MongoUsersRepository } from "@repositories/Impl/MongoUsersRepository"
import { ShowUserUseCase } from "./ShowUserUseCase"
import { ShowUserController } from "./ShowUserController"

const mongoUsersRepository = new MongoUsersRepository()

const showUserUseCase = new ShowUserUseCase(mongoUsersRepository)

const showUserController = new ShowUserController(showUserUseCase)

export { showUserUseCase, showUserController}
