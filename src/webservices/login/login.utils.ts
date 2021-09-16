import User from '../../schemas/User'
import bcript from 'bcrypt'
import Jwt from 'jsonwebtoken'
import { secret } from '../../config/auth.json'

const generateToken = (params = {}) => {
  return Jwt.sign(params, secret, { expiresIn: 1800 })
}

const authUser = async (req: any, res: any, next: any) => {
  const { email, password } = req.body

  const user:any = await User.findOne({ email }).select('+password')

  if (!user) {
    res.status(400).send({ message: 'User not found' })
  }

  if (!await bcript.compare(password, user.password)) {
    res.status(400).send({ message: 'Invalid password' })
  }

  user.password = undefined

  res.send({
    user,
    token: generateToken({ id: user.id })
  })
}

export { authUser, generateToken }
