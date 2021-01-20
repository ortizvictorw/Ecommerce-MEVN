const mongoose = require ('mongoose');
const {Schema} = mongoose;
const bcrypt = require("bcryptjs");


const UsuarioSchema = new Schema(
    {
        nombre:
        {
            type:String,
            unique:true,
            required:true
        },
        email:
        {
            type:String,
            unique:true,
            required:true
        },
        roles:
        [
            {
                ref:"Role",
                type:Schema.Types.ObjectId
            }
        ],
        password:
        {
            type:String,
            required:true
        },
        avatar:
        {
            type:String,
            default:`../../public/images/default.jpeg`
        }
        
    },
    {
      timestamps: true,
      versionKey: false,
    }
        
       
)

UsuarioSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(toString(this.password), 10);
    next();
});

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }




module.exports = mongoose.model('Usuario', UsuarioSchema);
