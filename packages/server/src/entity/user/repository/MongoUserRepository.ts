import MongoDB from "src/database/mongo";
import { IUserRepository } from "./IUserRepository";
import { User } from "../User";
import UserSchema from "./UserSchema";


export class MongoUserRepository implements IUserRepository {

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

  async findById(id: string): Promise<User> {
    const response = await UserSchema.findById(id)
    return response;
  }

  async findAll(): Promise<User[]> {
    const response = await UserSchema.find();
    return response;
  }

}
