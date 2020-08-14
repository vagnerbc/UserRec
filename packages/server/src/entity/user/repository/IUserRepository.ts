import { User } from "../User";

export interface IUserRepository {

  findByEmail(email: string): Promise<User>

  findById(id: string): Promise<User>

  findAll(): Promise<User[]>

  save(user: User): Promise<void>

}
