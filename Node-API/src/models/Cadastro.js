const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Cadastro', CadastroSchema);