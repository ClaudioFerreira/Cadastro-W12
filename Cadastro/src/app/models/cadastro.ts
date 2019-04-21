export class Cadastro {
    _id: any;
    nome: any;
    telefone: any;

    constructor(_id = "", nome = "", telefone = 0) {
        this._id = _id;
        this.nome = nome;
        this.telefone = telefone;
    }
}
