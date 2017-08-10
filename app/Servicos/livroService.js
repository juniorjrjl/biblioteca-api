var Livro = require('../Modelos/livro');
var resposta = require('../Utilidades/respostasHTTP');

var cadastrar = function (livro, sucesso, erro) {
    new Livro(livro).save(resposta.tratar(sucesso, erro));
};

var atualizar = function (livro, sucesso, erro) {
    Livro.findByIdAndUpdate({'_id':livro._id}, {nome : livro.nome}, resposta.tratar(sucesso, erro));
};

var excluir = function (livroId, sucesso, erro) {
    Livro.findByIdAndRemove(livroId, resposta.tratar(sucesso, erro));
};

var selecionar = function (sucesso, erro) {
    return Livro.find()
        .sort('+nome')
        .populate('usuarios','nome')
        .populate('livros','nome')
        .exec(resposta.tratar(sucesso, erro));
};

var selecionarSemOpiniaoUsuario = function(idsLivro, sucesso, erro){
    var filtro = {'_id':{$nin: idsLivro}};
    return Livro.find(filtro)
        .sort('+nome')
        .exec(sucesso, erro);
}

exports.cadastrar = cadastrar;
exports.selecionar = selecionar;
exports.selecionarSemOpiniaoUsuario = selecionarSemOpiniaoUsuario;
exports.atualizar = atualizar;
exports.excluir = excluir;