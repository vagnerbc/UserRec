import { Router } from 'express'
import { createUserController } from '@useCases/CreateUser'
import { showUserController } from '@useCases/ShowUser'

const router = Router()

router.post('/user', (request, response) => createUserController.handle(request, response))
router.get('/user', (request, response) => showUserController.handle(request, response))

export { router }
