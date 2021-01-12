const mongoose = require ('mongoose');
const {Schema} = mongoose;

const Producto = new Schema({
    titulo:String,
    descripcion:String,
    precio:Number,
    imagen:{
        type:String,
        default:`../../public/images/default.jpeg`
    }
})

module.exports = mongoose.model('Producto', Producto);
