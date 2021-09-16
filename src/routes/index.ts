import { Router } from 'express'
import { router as routes } from './routes.controllers'

const router = Router()

router.use('/api/', routes)

export default router
