const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('requiredir');

// Iniciando o app
const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/cadastro',
    { useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);