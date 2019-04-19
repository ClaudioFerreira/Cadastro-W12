const express = require('express');
const routes = express.Router();

const CadastroController = require('./controllers/CadastroController');

routes.get('/cadastro', CadastroController.index);
routes.get('/cadastro/:id', CadastroController.show);
routes.post('/cadastro', CadastroController.new);
routes.put('/cadastro/:id', CadastroController.update);
routes.delete('/cadastro/:id', CadastroController.destroy);

module.exports = routes;