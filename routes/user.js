const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Rota para listar todos os usuários
router.get('/usuarios', userController.listarUsuarios);

// Rota para obter um usuário específico
router.get('/usuarios/:id', userController.obterUsuario);

// Rota para criar um novo usuário
router.post('/usuarios', userController.criarUsuario);

// Rota para atualizar um usuário existente
router.put('/usuarios/:id', userController.atualizarUsuario);

// Rota para excluir um usuário
router.delete('/usuarios/:id', userController.excluirUsuario);

module.exports = router;
