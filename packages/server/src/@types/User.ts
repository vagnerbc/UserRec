import { Document } from 'mongoose'

export interface IUser extends Document {
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String
}
