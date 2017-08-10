var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome:{
        type: String,
        require: true
    }
});

var Usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = Usuario;