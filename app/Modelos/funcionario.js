var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var funcionarioSchema = new Schema({
    nome:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true
    }
});

var Funcionario = mongoose.model('funcionarios', funcionarioSchema);
module.exports = Funcionario;