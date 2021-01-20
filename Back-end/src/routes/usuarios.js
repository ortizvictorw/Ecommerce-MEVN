const express = require('express');
const router = express.Router();
const usuariosController = require ('../controllers/usuariosController')


/* GET a los usuarios -- endpoint:http://localhost:3000/api/usuarios */
router.get('/', usuariosController.listar);

/* POST a los usuarios -- endpoint:http://localhost:3000/api/usuarios */
router.post('/', usuariosController.register);

/* PUT al usuario -- endpoint:http://localhost:3000/api/usuarios */
router.put('/:id', usuariosController.editar);

/* DELETE al usuario -- endpoint:http://localhost:3000/api/usuarios */
router.delete('/:id', usuariosController.eliminar);

/* login del usuario -- endpoint:http://localhost:3000/api/login */
router.post('/login', usuariosController.login);




module.exports = router;
