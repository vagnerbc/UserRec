import express from 'express'

import UserController from '@controllers/UserController'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello Wolrd')
})

router.post('/user', UserController.add)

export default router
