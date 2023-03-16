const express = require('express')
const router = express.Router()
const auth = require('../auth/auth')

const createUser = require('../controllers/users/createUser')

router.post('/registrar',createUser)

module.exports = router