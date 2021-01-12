//**REQUERIR EL MODELO DE LA BASE DE DATOS**/
const Producto = require ('../database/models/ProductosSchema');


module.exports = {
    listar : async(req, res, next)=> {
            const productos = await Producto.find();
            res.json(productos);
          }
    }
