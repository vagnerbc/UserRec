import { Router } from 'express'
import { createUserController } from '@useCases/CreateUser'

const router = Router()

router.post('/user', (request, response) => createUserController.handle(request, response))

export { router }
