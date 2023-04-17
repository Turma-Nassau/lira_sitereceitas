const express = require('express');

function pesquisarController(db) {
  const router = express.Router();

  router.get('/', (req, res) => {
    const termoBusca = req.query.termoBusca;
    if (!termoBusca) {
      res.status(400).send('Termo de busca não informado');
      return;
    }

    db.query(
      'SELECT * FROM receitas WHERE nome LIKE ? OR ingredientes LIKE ?',
      [`%${termoBusca}%`, `%${termoBusca}%`],
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).send('Erro ao buscar receitas');
          return;
        }

        res.json(results);
      }
    );
  });

  return router;
}

module.exports = pesquisarController;
