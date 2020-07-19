import bcrypt from 'bcrypt'

export const encryptValue = async (value: String) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(value, salt)
}
