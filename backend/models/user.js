//on va creer notre base de donnée (categorie) a partir du code ci dessous
import mongoose from "mongoose"
const userSchema=mongoose.Schema({
   
    email:{type :String ,required:true },
   
    password:{type :String ,required:true },
   
})
const User =mongoose.model('User',userSchema);

export default User