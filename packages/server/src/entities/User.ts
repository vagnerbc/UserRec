import { IUser } from "src/@types/User"

export class User implements IUser{

  public identification: string
  public firstName: string
  public lastName: string
  public email: string
  public phone: string
  public password: string

  constructor(props: User) {
    Object.assign(this, props)
  }
}
