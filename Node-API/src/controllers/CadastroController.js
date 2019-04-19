const mongoose = require('mongoose');

const Cadastro = mongoose.model('Cadastro');

module.exports = {
    async index(req, res) {
        const cadastros = await Cadastro.find();
        return res.json(cadastros);
    },

    async show(req, res) {
        const cadastro = await Cadastro.findById(req.params.id);
        return res.json(cadastro);
    },

    async new(req, res) {
        const cadastro = await Cadastro.create(req.body);
        return res.json(cadastro);
    },

    async update(req, res) {
        const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(cadastro);
    },

    async destroy(req, res) {
        const cadastro = await Cadastro.findByIdAndRemove(req.params.id);
        res.send();
    }
}