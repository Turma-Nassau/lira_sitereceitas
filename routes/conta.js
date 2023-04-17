const express = require('express');
const router = express.Router();
const contaController = require('../controllers/conta.controller');

// Rota para listar todas as contas
router.get('/contas', contaController.listarContas);

// Rota para obter uma conta específica
router.get('/contas/:id', contaController.obterConta);

// Rota para criar uma nova conta
router.post('/contas', contaController.criarConta);

// Rota para atualizar uma conta existente
router.put('/contas/:id', contaController.atualizarConta);

// Rota para excluir uma conta
router.delete('/contas/:id', contaController.excluirConta);

module.exports = router;
