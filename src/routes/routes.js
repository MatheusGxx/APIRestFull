const router = require('express').Router()
const controller = require('../controller/controller')

// Verbos HTTP ( 4 TIPOS ):

// GET - Obter Dados
// POST - Enviar/Receber dados
// PUT - Atualizar Dados
// Delete -  remover dados


router.get('/produtos/:id?', controller.get) // o '?' significa que ele pode pegar 1 produto ou todos os produtos do banco de dados.

module.exports = router 