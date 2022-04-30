import  mongoose  from "mongoose"

const fournisseurSchema=mongoose.Schema({
    code:{ type: String, required: true ,unique:true },
    raisoc:{ type: String, required: false },
    email:{ type: String, required: false },
    tel:{ type: Number, required: false },
  
    })
const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);

export default Fournisseur;