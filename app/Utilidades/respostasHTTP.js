var responder = function(response, status){
    return function(resultado) {
        response.status(status).json(resultado);
    }
};

var ok = function(response){
    return responder(response, 200);
};

var criado = function(response){
    return responder(response, 201);
};

var erro = function(response){
    return responder(response, 400);
};


var tratar = function(tratarResultado, tratarErro) {
    return function (erro, resultado){
        if (erro) {
            tratarErro(erro);
        } else {
            tratarResultado(resultado);
        }
    }
};

exports.responder = responder;
exports.ok = ok;
exports.criado = criado;
exports.erro = erro;
exports.tratar = tratar;
