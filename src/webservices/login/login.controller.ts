import { authUser } from './login.utils'

const authenticate = async (req: any, res: any, next: any) => {
  authUser(req, res, next)
}

export { authenticate }
