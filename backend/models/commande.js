import  mongoose  from "mongoose"
import User from "./user.js";
import Article from "./article.js";

const commandeSchema=mongoose.Schema({
    paye:{ type: Boolean, required: false },
    refcommande:{ type: String, required: true,unique:true },
    client:{ type: String, required: false },
    dateAchat:{ type: Date, required: false },
    mt_total:{ type: Number, required: false },
    
    articleID: {type:mongoose.Schema.Types.ObjectId,
    ref:Article},
    userID: {type:mongoose.Schema.Types.ObjectId,
    ref:User}
    })
const Commande = mongoose.model('Commande', commandeSchema);

export default Commande;