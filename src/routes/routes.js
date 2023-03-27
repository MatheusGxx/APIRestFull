const router = require('express').Router()
const controller = require('../controller/controller')

// Verbos HTTP ( 4 TIPOS ):

// GET - Obter Dados
// POST - Enviar/Receber dados
// PUT - Atualizar Dados
// Delete -  remover dados


router.get('/produtos', controller.get)

module.exports = router 