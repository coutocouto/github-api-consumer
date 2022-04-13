const { Router } = require('express')
const { UserController } = require('../controller/UserController')

const router = Router()

router
  .get('/api/users/:username/details', UserController.getUserDetails)
  .get('/api/users', UserController.getUsersSinceId)
  .get('/api/users/:username/repos', UserController.getUserRepository)

module.exports = router
