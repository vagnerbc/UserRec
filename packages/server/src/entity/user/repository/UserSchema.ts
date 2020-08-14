import mongoose, { Document, Schema } from 'mongoose'
import { IUser } from 'src/@types/User'

interface IUserDocument extends Document, IUser {}

const UserSchema = new Schema({
  identification: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String
})

export default mongoose.model<IUserDocument>('User', UserSchema)
