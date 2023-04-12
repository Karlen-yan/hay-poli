const express = require('express')
const router = express.Router()
const auth = require('../auth/auth')

const getProducts = require('../controllers/apis/getProducts')
const getProductId = require('../controllers/apis/getProductId')
const createUser = require('../controllers/users/createUser')
const postUser = require('../controllers/users/postUser')
const deletePost =require('../controllers/apis/deletePost')
const postBlog =require('../controllers/apis/postPostblog')
const enviarMensaje = require('../controllers/mailchimp/sendForm')


// ropas
const getProductsRopas = require('../controllers/apis/ProductosRopas/getProductsRopas')

// Post usuarios 
router.post('/users',createUser)
router.post('/api/login',postUser)

// blog  
router.get('/posts',getProducts);
router.get('/posts/:id',getPostById);
router.post('/posts',postBlog);
router.delete('/posts/:id',deletePost);

// Productos Ropas 
router.get('/getProducts',getProductsRopas);

// mailchimp Ruta 


router.post('/contacto', enviarMensaje.enviarMensaje);

module.exports = router;