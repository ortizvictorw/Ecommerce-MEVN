const express = require('express');
const router = express.Router();
const productosController = require ('../controllers/Api/productosController')


/* GET a los productos -- endpoint:http://localhost:3000/api/productos */
router.get('/', productosController.listar);

/* POST a los productos -- endpoint:http://localhost:3000/api/productos */
router.post('/', productosController.crear);

/* PUT al producto -- endpoint:http://localhost:3000/api/productos */
router.put('/:id', productosController.editar);

/* DELETE al producto -- endpoint:http://localhost:3000/api/productos */
router.delete('/:id', productosController.eliminar);

module.exports = router;
