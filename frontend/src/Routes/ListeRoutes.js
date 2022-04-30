import React from 'react';
import { Routes, Route } from 'react-router-dom';
//categorie
import EditCategorie from '../Component/Categories/EditCategorie';
import InsertCategorie from '../Component/Categories/InsertCategorie';
import ListeCategorie from '../Component/Categories/ListeCategorie';
//scategorie
import ListeScategorie from '../Component/Scategories/ListeScategorie';
import EditScategorie from '../Component/Scategories/EditScategorie';
import InsertScategorie from '../Component/Scategories/InsertScategorie';
//aricle
import ListeArticle from '../Component/Articles/ListeArticle';
import EditArticle from '../Component/Articles/EditArticle';
import InsertArticle from '../Component/Articles/InsertArticle';
import ListeArticleCard from '../Component/Articles/ListeArticleCard';
import ListArticlesDatatable from '../Component/Articles/ListArticlesDatatable';
import CartArticle from '../Component/Articles/CartArticle';
import SignIn from '../Component/SignIn';
import Carouselhome from '../Component/Articles/Carouselhome';
const ListeRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path="/Carouselhome" element={<Carouselhome />} />

                <Route path="/Scategories" element={<ListeScategorie />} />
                <Route path="/Scategories/edit/:id" element={<EditScategorie />} />
                <Route path="/Scategories/add" element={<InsertScategorie />} />

                <Route path="/Articles" element={<ListeArticle />} />
                <Route path="/ArticlesDatatable" element={<ListArticlesDatatable />} />
                <Route path="/Article/edit/:id" element={<EditArticle />} />
                <Route path="/Articles/add" element={<InsertArticle />} />
                <Route path="/ArticleCards" element={<ListeArticleCard />} />
                <Route path="/Cart" element={<CartArticle />} />

                <Route path="/Categories" element={<ListeCategorie />} />
                <Route path="/Categories/edit/:id" element={<EditCategorie />} />
                <Route path="/Categories/add" element={<InsertCategorie />} />

                <Route path="/SignIn" element={<SignIn />} />

              
            </Routes>
        </div>
    );
}

export default ListeRoutes;
