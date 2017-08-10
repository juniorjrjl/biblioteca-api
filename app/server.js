var express = require('express');
var app = express();
var porta = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
var usuarioRoteador = require('./Roteadores/usuarioRoteador');
var livroRoteador = require('./Roteadores/livroRoteador');
var opiniaoRoteador = require('./Roteadores/opiniaoRoteador');
require('./conexao/mongodb');

app.use(bodyParser.json());
app.use(cors());
app.use(usuarioRoteador);
app.use(livroRoteador);
app.use(opiniaoRoteador);

app.listen(porta, function(){
    console.log('Biblioteca API no ar...');
});