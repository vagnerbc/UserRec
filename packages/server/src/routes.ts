import { Router } from 'express'
import { createUserController } from './entity/user/useCase/Create'
import { showUserController } from './entity/user/useCase/Show'

const router = Router()

router.post('/user', (request, response) => createUserController.handle(request, response))
router.get('/user', (request, response) => showUserController.handle(request, response))

export { router }
