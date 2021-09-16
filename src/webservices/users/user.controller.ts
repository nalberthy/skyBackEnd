import { getUser, createUser } from './user.utils'

const getUsers = async (req: any, res: any, next: any) => {
  getUser(req, res, next)
}

const getUserId = async (req: any, res: any, next: any) => {
  getUser(req, res, next)
}
const userCreate = async (req: any, res: any, next: any) => {
  createUser(req, res, next)
}

export { getUsers, getUserId, userCreate }
