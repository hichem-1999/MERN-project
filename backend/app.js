import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
//frontend parle avex backend sur deux port  cors
import cors from "cors";
dotenv.config()
const app = express();

//import des routes
import categorieRouter from "./routes/categorie.route.js"
import scategorieRouter from "./routes/scategorie.route.js"
import articleRouter from "./routes/article.route.js"
import userRouter from "./routes/user.route.js"
import commandeRouter from "./routes/commande.route.js"
import panierRouter from "./routes/panier.route.js"
import fournisseurRouter from "./routes/fournisseur.route.js"


//BodyParser Middleware ,, realtion entre front et expressJS
app.use(express.json()); 
app.use(cors());

// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
 useUnifiedTopology: true
 })
 .then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
 console.log('Impossible de se connecter à la base de données', err);
 process.exit();
});
//routes
app.use('/api/categories',categorieRouter);
app.use('/api/scategories',scategorieRouter);
app.use('/api/articles',articleRouter);
app.use('/api/users',userRouter);
app.use('/api/commandes',commandeRouter);
app.use('/api/paniers',panierRouter);
app.use('/api/fournisseurs',fournisseurRouter);
app.use("/",(req,res)=>{
    res.send("bonjour");
    });
    
app.get("/",(req,res)=>{
res.send("bonjour");
});

app.listen(process.env.PORT, () => {
 console.log(`Server is listening on port ${process.env.PORT}`); });

