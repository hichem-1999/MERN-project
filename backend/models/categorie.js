//on va creer notre base de donnée (categorie) a partir du code ci dessous
import mongoose from "mongoose"
const categorieSchema=mongoose.Schema({
    nomcategorie:{type :String ,required:true ,unique:true},
    imagecategorie:{type :String ,required:false }
})
const Categorie =mongoose.model('Categorie',categorieSchema);

export default Categorie