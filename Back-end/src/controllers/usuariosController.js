//**REQUERIR EL MODELO DE LA BASE DE DATOS**/
const UsuarioSchema = require ('../database/models/UsuarioSchema');
const {sign} = require ('jsonwebtoken');
const Role = require('../database/models/Role');


module.exports = {
    listar : async(req, res, next)=> {
            const usuarios = await UsuarioSchema.find();
            
            res.json(usuarios);
          },

    register: async(req,res,next)=>{
      const {nombre, password, avatar, roles, email} = req.body
      const newUsuario = new UsuarioSchema({
        nombre, 
        password, 
        avatar, 
        email
      });

      /** VERIFICACION DE ROL **/
      if (req.body.roles){
        const RolEncontrado = await Role.find({nombre:{$in:req.body.roles}})
        newUsuario.roles = RolEncontrado.map(roleId => roleId._id)
      }else{
        const role = await Role.findOne({nombre:"usuario"})
        
        newUsuario.roles = [role._id]
      }

      const usuarioGuardado = await newUsuario.save();
      console.log(usuarioGuardado)
      
      /**GENERACION DEL TOKEN**/
      const token = sign({id:usuarioGuardado._id},`${process.env.SECRET}`,{
       expiresIn: 86400 //24Hs
      })

        res.json({
          status: 'Usuario Registrado',
          token:token
        })
          },

    login:async(req,res,next)=>{
      //Request body email can be an email or username
    const userFound = await UsuarioSchema.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await UsuarioSchema.comparePassword(
      req.body.password,
      userFound.password
    );
   
     
  console.log(matchPassword)
  
  
      if (!matchPassword)
        return res.status(401).json({
          token: null,
          message: "Invalid Password",
        });

      const token = sign({id:usuarioGuardado._id},`${process.env.SECRET}`,{
       expiresIn: 86400 //24Hs
      })

  
    },

    editar:async(req,res,next)=>{

      await UsuarioSchema.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        status: 'UsuarioSchema Editado'
      });

        },
    eliminar:async(req,res,next)=>{
  await UsuarioSchema.findByIdAndRemove(req.params.id);
  res.json({
    status: 'UsuarioSchema Eliminado'
      });
        }
}