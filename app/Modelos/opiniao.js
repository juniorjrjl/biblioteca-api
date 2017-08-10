var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Enum = {
    values: ['Ótimo', 'Bom', 'Ruim', 'Regular'],
    message: 'Estado de conservação inválido'
};

var opiniaoSchema = new Schema({
    estadoConservacao:{
        type: String,
        enum: Enum,
        require: true
    },nota:{
        type: Number,
        min: 0,
        max: 10,
        require: true
    },
    observacao:{
        type: String,
        require: false,
        argument: [0, 256],
        message: 'A observação deve ter no máximo 256 caractéres'
    },
    idUsuario:{
        type: Schema.Types.ObjectId,
        ref : 'usuarios',
        //type: String,
        require: true
    },
    idLivro:{
        type: Schema.Types.ObjectId,
        ref: 'livros',
        //type: String,
        require: true
    }
});

opiniaoSchema.index({idLivro:1, idUsuario:1, unique : true});

var Opiniao = mongoose.model('opinioes', opiniaoSchema);
module.exports = Opiniao;