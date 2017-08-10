var Opiniao = require('../Modelos/opiniao');
var resposta = require('../Utilidades/respostasHTTP');

var buscarPorIdUsuario = function (idUsuario, sucesso, erro) {
    Opiniao.find({idUsuario : idUsuario}).exec(sucesso, erro);
};

var buscarTodos = function (sucesso, erro) {
    Opiniao.find()
        .sort('+estadoConservacao')
        .exec(sucesso, erro);
};

var cadastrar = function (usuario, sucesso, erro) {
    new Opiniao(usuario).save(resposta.tratar(sucesso, erro));
};

exports.buscarPorIdUsuario = buscarPorIdUsuario;
exports.buscarTodos = buscarTodos;
exports.cadastrar = cadastrar;