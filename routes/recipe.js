const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

// Rota para listar todas as receitas
router.get('/receitas', recipeController.listarReceitas);

// Rota para obter uma receita específica
router.get('/receitas/:id', recipeController.obterReceita);

// Rota para criar uma nova receita
router.post('/receitas', recipeController.criarReceita);

// Rota para atualizar uma receita existente
router.put('/receitas/:id', recipeController.atualizarReceita);

// Rota para excluir uma receita
router.delete('/receitas/:id', recipeController.excluirReceita);

module.exports = router;
