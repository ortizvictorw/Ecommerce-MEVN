//**REQUERIR EL MODELO DE LA BASE DE DATOS**/
const Usuario = require ('../database/models/UsuarioSchema');




module.exports = {
    listar : async(req, res, next)=> {
            const usuarios = await Usuario.find();
            res.json(usuarios);
          },

    crear: async(req,res,next)=>{
      const usuario = new Usuario(req.body);
        await usuario.save();
        res.json({
          status: 'Usuario Guardado'
        })
          },

    editar:async(req,res,next)=>{

      await Usuario.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        status: 'Usuario Editado'
      });

        },
    eliminar:async(req,res,next)=>{
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Usuario Eliminado'
      });
        }
}