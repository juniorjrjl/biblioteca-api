var router = require('express').Router();
var controller = require('../Controller/opiniaoController');

router.post('/opinioes/enviar', controller.cadastrar);
router.get('/opinioes/Selecionar', controller.selecionar);

module.exports = router;