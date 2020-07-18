import mongoose, { Schema } from 'mongoose'
import { IUser } from 'src/@types/User'

const UserSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String
})

export default mongoose.model<IUser>('User', UserSchema)
