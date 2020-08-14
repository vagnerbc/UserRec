import { MongoUserRepository } from "../../repository/MongoUserRepository"
import { ShowUserUseCase } from "./ShowUserUseCase"
import { ShowUserController } from "./ShowUserController"

const mongoUsersRepository = new MongoUserRepository()

const showUserUseCase = new ShowUserUseCase(mongoUsersRepository)

const showUserController = new ShowUserController(showUserUseCase)

export { showUserUseCase, showUserController}
