var router = require('express').Router();
var controller = require('../Controller/usuarioController');

router.get('/usuarios/avaliar', controller.iniciarAvaliacao);
router.post('/usuarios/iniciarAvaliacao', controller.iniciarAvaliacao);

module.exports = router;