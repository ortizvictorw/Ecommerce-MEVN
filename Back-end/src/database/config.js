//** Coneccion a la base de Datos Mongodb **/
const mongoose = require ('mongoose');
const coneccionDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7fmuk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(db =>console.log('conexion exitosa a Mongodb'))
    .catch(err => console.error(err));
}
module.exports = coneccionDB;