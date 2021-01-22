const express = require('express');
const router = express.Router();
const productosController = require ('../controllers/productosController');

const { verificacionToken , esAdministrador} = require('../middlewares/index')

/* GET a los productos -- endpoint:http://localhost:3000/api/productos */
router.get('/', productosController.listar);

/* POST a los productos -- endpoint:http://localhost:3000/api/productos */
router.post('/', [verificacionToken,esAdministrador], productosController.crear);

/* PUT al producto -- endpoint:http://localhost:3000/api/productos */
router.put('/:id',[verificacionToken,esAdministrador], productosController.editar);

/* DELETE al producto -- endpoint:http://localhost:3000/api/productos */
router.delete('/:id',[verificacionToken,esAdministrador], productosController.eliminar);

module.exports = router;
