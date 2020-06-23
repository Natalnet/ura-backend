import { Router } from 'express'

import UserController from '@controllers/UserController'

const route = Router()

route.get('/', (request, response) => {
  return response.json({ Serve: 'teste' })
})

route.post('/users', UserController.store)
route.get('/users', UserController.index)

export default route
