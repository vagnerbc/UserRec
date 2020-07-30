import { IUsersRepository } from "@repositories/IUsersRepository"
import MongoDB from "../../database/mongo"
import { User } from "@entities/User"
import UserSchema from "./models/UserSchema"
import { response } from "express"

export class MongoUsersRepository implements IUsersRepository {

  constructor() {
    MongoDB.connect()
  }

  async findByEmail(email: string): Promise<User> {
    const response =  await UserSchema.findOne({
      email
    })

    return (response) ? new User(response): null;
  }

  async save(user: User): Promise<void> {
    const schema = new UserSchema(user)
    await schema.save()
  }

  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.")
  }
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.")
  }

}
