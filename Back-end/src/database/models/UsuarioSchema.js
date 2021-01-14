const mongoose = require ('mongoose');
const {Schema} = mongoose;
const Bcrypt = require("bcryptjs");


const Usuario = new Schema({
        nombre:
        {
            type:String
        },
        email:
        {
            type:String
        },
        nivel:
        {
            type:String
        },
        password:
        {
            type:String
        },
        avatar:
        {
            type:String,
            default:`../../public/images/default.jpeg`
        }
})
Usuario.pre("save", function(next) {
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});



module.exports = mongoose.model('Usuario', Usuario);
