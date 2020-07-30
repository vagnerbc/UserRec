import { Request, Response } from 'express'
import { encryptValue } from '@utils/index'
import User from '@repositories/Impl/models/UserSchema'

class UserController {
  async add (req: Request, res: Response) {
    const { id, firstName, lastName, email, phone, password } = req.body

    const user = new User({ id, firstName, lastName, email, phone, password })
    user.password = await encryptValue(user.password)
    await user.save()

    res.json(user)
  }
}

export default new UserController()
