const express = require('express');
const router = express.Router();
const productosController = require ('../controllers/productosController');
const path = require('path');
const multer = require('multer');


const { verificacionToken , esAdministrador} = require('../middlewares/index')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/img'),
    filename: (req, file, cb, filename) => {
        
        cb(null, Date.now() + path.extname(file.originalname));
    }
}) 
const upload = multer({storage});


/* GET a los productos -- endpoint:http://localhost:3000/api/productos */

router.get('/', productosController.listar);
/* POST a los productos -- endpoint:http://localhost:3000/api/productos */
router.post('/',upload.any(), /*[verificacionToken,esAdministrador],*/productosController.crear);



/* PUT al producto -- endpoint:http://localhost:3000/api/productos */
router.put('/:id',upload.any()/* ,[verificacionToken,esAdministrador] */, productosController.editar);

router.get('/:id', productosController.listarUno);

/* DELETE al producto -- endpoint:http://localhost:3000/api/productos */
router.delete('/:id'/* ,[verificacionToken,esAdministrador] */, productosController.eliminar);

module.exports = router;
