const express = require('express');
const router = express.Router();
const usuariosController = require ('../controllers/usuariosController')
const { verificacionToken , esAdministrador ,validacionDeRoles} = require('../middlewares/index')
/* GET a los usuarios -- endpoint:http://localhost:3000/api/usuarios */
router.get('/',[verificacionToken,esAdministrador], usuariosController.listar);

/* POST a los usuarios -- endpoint:http://localhost:3000/api/usuarios */
router.post('/',validacionDeRoles, usuariosController.register);

/* PUT al usuario -- endpoint:http://localhost:3000/api/usuarios */
router.put('/:id',[verificacionToken,esAdministrador], usuariosController.editar);

/* DELETE al usuario -- endpoint:http://localhost:3000/api/usuarios */
router.delete('/:id', usuariosController.eliminar);

/* login del usuario -- endpoint:http://localhost:3000/api/usuarios/login */
router.post('/login',verificacionToken, usuariosController.login);





module.exports = router;
