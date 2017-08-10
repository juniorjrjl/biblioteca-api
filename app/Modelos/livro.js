var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var livroSchema = new Schema({
    nome:{
        type: String,
        require: true
    }
});

var Livro = mongoose.model('livros', livroSchema);
module.exports = Livro;