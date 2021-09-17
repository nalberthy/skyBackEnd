import User from '../../schemas/User'
import { generateToken } from '../login/login.utils'
const getUser = async (req: any, res: any, next: any) => {
  try {
    const id = req.params.id
    if (!id) {
      const users:any = await User.find(id)
      users.password = undefined
      return res.json(users)
    } else {
      const user:any = await User.findById(req.params.id)
      user.password = undefined
      return res.json(user)
    }
  } catch (error) {
    return res.status(400).send({ message: error.message })
  }
}

const createUser = async (req: any, res: any, next: any) => {
  const { email } = req.body
  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ message: 'User already exists' })
    } else {
      const user = await User.create(req.body)
      return res.json({
        user,
        token: generateToken({ id: user.id })
      })
    }
  } catch (error) {
    return res.status(400).send({ message: 'Registration failed', error: error.message })
  }
}

export { getUser, createUser }
