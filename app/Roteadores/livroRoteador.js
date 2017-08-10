var router = require('express').Router();
var controller = require('../Controller/livroController');

router.put('/livros/atualizar', controller.atualizar);
router.post('/livros/cadastrar', controller.cadastrar);
router.get('/livros/Selecionar', controller.selecionar);
router.delete('/livros/excluir/:livroId', controller.excluir);

module.exports = router;