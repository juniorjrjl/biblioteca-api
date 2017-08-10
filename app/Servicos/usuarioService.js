var Usuario = require('../Modelos/usuario');
var resposta = require('../Utilidades/respostasHTTP');

var buscarPorNome = function (usuarioBusca, sucesso, erro) {
    var filtro = {nome: usuarioBusca.nome};
    var query = {nome : true};
    Usuario.findOne(filtro)
        .select(query)
        .exec(sucesso, erro);
};

var cadastrar = function (usuario, sucesso, erro) {
    new Usuario(usuario).save(resposta.tratar(sucesso, erro));
};

exports.buscarPorNome = buscarPorNome;
exports.cadastrar = cadastrar;