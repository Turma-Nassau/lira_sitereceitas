const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const categoriaController = require('./controllers/categoria.controller');
const contaController = require('./controllers/conta.controller');
const pesquisarController = require('./controllers/pesquisar.controller');
const receitasController = require('./controllers/receitas.controller');
const userController = require('./controllers/user.controller');

const app = express();
const port = process.env.PORT || 3000;

const dbConfig = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'minhaSenhaSegura',
  database: 'meuBancoDeDados'
};

async function startServer() {
  try {
    const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });

    const db = {
      Sequelize,
      sequelize,
      Categoria: require('./models/categoria.model')(sequelize, Sequelize),
      Conta: require('./models/conta.model')(sequelize, Sequelize),
      Receita: require('./models/receita.model')(sequelize, Sequelize),
      User: require('./models/user.model')(sequelize, Sequelize)
    };

    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Rotas para categoriaController
    app.get('/categoria', categoriaController.getAll(db));
    app.get('/categoria/:id', categoriaController.getById(db));
    app.post('/categoria', categoriaController.create(db));
    app.put('/categoria/:id', categoriaController.update(db));
    app.delete('/categoria/:id', categoriaController.remove(db));

    // Rotas para contaController
    app.get('/conta', contaController.getAll(db));
    app.get('/conta/:id', contaController.getById(db));
    app.post('/conta', contaController.create(db));
    app.put('/conta/:id', contaController.update(db));
    app.delete('/conta/:id', contaController.remove(db));

    // Rota para pesquisarController
    app.get('/pesquisar', pesquisarController.search(db));

    // Rotas para receitasController
    app.get('/receitas', receitasController.getAll(db));
    app.get('/receitas/:id', receitasController.getById(db));
    app.post('/receitas', receitasController.create(db));
    app.put('/receitas/:id', receitasController.update(db));
    app.delete('/receitas/:id', receitasController.remove(db));

    // Rotas para userController
    app.get('/user', userController.getAll(db));
    app.get('/user/:id', userController.getById(db));
    app.post('/user', userController.create(db));
    app.put('/user/:id', userController.update(db));
    app.delete('/user/:id', userController.remove(db));

    app.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
}

startServer();
