const express = require('express')
const router = express.Router()
const auth = require('../auth/auth')

const getProducts = require('../controllers/apis/getProducts')
const getProductId = require('../controllers/apis/getProductId')
const createUser = require('../controllers/users/createUser')

router.post('/users',createUser)

router.get('/posts',getProducts);
router.get('/posts/:id',getPostById);



module.exports = router;