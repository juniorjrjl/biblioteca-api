var resposta = require('../Utilidades/respostasHTTP');
var Service = require('../Servicos/livroService');

var excluir = function (request, response) {
    Service.excluir(request.params.livroId, resposta.ok(response), resposta.erro(response));
};

var atualizar = function (request, response){
    var livro = request.body;
    Service.atualizar(livro, resposta.ok(response), resposta.erro(response));
};

var cadastrar = function(request, response){
    var livro = request.body;
    Service.cadastrar(livro, retornaLivro(response, 201), resposta.erro(response));
};

function retornaLivro(response, status) {
    return function (livroCadastrado) {
        if (livroCadastrado){
            response.status(status).json(livroCadastrado);
        }
    }
}

var selecionar = function(request, response){
    Service.selecionar(resposta.ok(response), resposta.erro(response));
};


exports.cadastrar = cadastrar;
exports.selecionar =selecionar;
exports.atualizar = atualizar;
exports.excluir = excluir;