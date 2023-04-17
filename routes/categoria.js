const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controller');

// Rota para listar todas as categorias
router.get('/categorias', categoriaController.listarCategorias);

// Rota para obter uma categoria específica
router.get('/categorias/:id', categoriaController.obterCategoria);

// Rota para criar uma nova categoria
router.post('/categorias', categoriaController.criarCategoria);

// Rota para atualizar uma categoria existente
router.put('/categorias/:id', categoriaController.atualizarCategoria);

// Rota para excluir uma categoria
router.delete('/categorias/:id', categoriaController.excluirCategoria);

module.exports = router;
