var usuarioService = require('../Servicos/usuarioService');
var livroService = require('../Servicos/livroService');
var opiniaoService = require('../Servicos/opiniaoService');
var resposta = require('../Utilidades/respostasHTTP');

var iniciarAvaliacao = function(request, response){
    var usuario = request.body;
    var dados = [];
    usuarioService.buscarPorNome(usuario,getCallbackUsuario(usuario, response, dados), resposta.erro(response));
};

var getCallbackUsuario = function (usuarioPesquisar, response, dados) {
    return function (erro, usuarioRecuperado) {
        if (usuarioRecuperado) {
            dados.push(usuarioRecuperado);
            opiniaoService.buscarPorIdUsuario(usuarioRecuperado.id, function (erro, opinioes) {
                if (erro){
                    resposta.erro(response);
                }
                if(opinioes){
                    var idsLivros = [];
                    opinioes.forEach(function(value) {idsLivros.push(value.idLivro)});
                    livroService.selecionarSemOpiniaoUsuario(idsLivros,function (erro, livros) {
                        if (erro){
                            resposta.erro(response);
                        }
                        if (livros){
                            dados.push(livros);
                        }
                        response.status(200).json(dados);
                    }, resposta.erro(response));
                }
            }, resposta.erro(response));
        }else{
            usuarioService.cadastrar(usuarioPesquisar, function (usuarioCadastrado) {
                if (usuarioCadastrado){
                    dados.push(usuarioCadastrado);
                    livroService.selecionar(function (livros) {
                        if (livros){
                            dados.push(livros);
                        }
                        response.status(201).json(dados);
                    }, resposta.erro(response));
                }
            }, resposta.erro(response));
        }
    };
};

exports.iniciarAvaliacao = iniciarAvaliacao;