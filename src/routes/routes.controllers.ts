import { Router } from 'express'
import { getUsers, userCreate, getUserId } from '../webservices/users/user.controller'
import { authenticate } from '../webservices/login/login.controller'
import Middleware from './routes.middleware'

const middleware = new Middleware()
const router = Router()

// routes public
router.post('/login', authenticate)
router.post('/user/create', userCreate)
// middleware
router.use(middleware.checkAuthToken)

// routes private
router.get('/user', getUsers)
router.get('/user/:id', getUserId)

export { router }
