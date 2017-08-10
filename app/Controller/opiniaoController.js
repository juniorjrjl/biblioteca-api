var resposta = require('../Utilidades/respostasHTTP');
var Service = require('../Servicos/opiniaoService');

var cadastrar = function(request, response){
    var opiniao = request.body;
    Service.cadastrar(opiniao, resposta.criado(response), resposta.erro(response));
};

var selecionar = function (request, response) {
    Service.selecionar(resposta.ok(response), resposta.erro(response));
}

exports.cadastrar = cadastrar;
exports.selecionar =selecionar;