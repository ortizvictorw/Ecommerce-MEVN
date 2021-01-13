//**REQUERIR EL MODELO DE LA BASE DE DATOS**/
const Producto = require ('../database/models/ProductosSchema');

module.exports = {
    listar : async(req, res, next)=> {
            const productos = await Producto.find();
            res.json(productos);
          },

    crear: async(req,res,next)=>{
        const producto = new Producto(req.body);
        await producto.save();
        res.json({
          status: 'producto Guardado'
        });
          },

    editar:async(req,res,next)=>{
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        status: 'producto Editado'
      });

        },
    eliminar:async(req,res,next)=>{
  await Producto.findByIdAndRemove(req.params.id);
  res.json({
    status: 'producto Eliminado'
      });
        }
}