const express = require('express');
const router = express.Router();
const pesquisarController = require('../controllers/pesquisar.controller');

// Rota para pesquisar receitas
router.get('/pesquisar/receitas', pesquisarController.pesquisarReceitas);

module.exports = router;
