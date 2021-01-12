const express = require('express');
const router = express.Router();
const productosController = require ('../controllers/productosController')


/* GET a los productos -- endpoint:http://localhost:3000/api/productos */
router.get('/', productosController.listar);

module.exports = router;
