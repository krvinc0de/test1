const { Router } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente} = require('../controllers/cliente.controller')
const router = Router();


router.get('/api/producto', consultarclientes);
router.post('/api/producto/registro', agregarclientes);
router.put('/api/producto/modificar', modificarcliente);
router.delete('/api/producto/eliminar/:id', eliminarcliente);



module.exports = router;