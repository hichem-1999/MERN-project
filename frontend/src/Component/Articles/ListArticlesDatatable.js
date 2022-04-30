import React from 'react';
import MUIDataTable from "mui-datatables";

//assure que tous les tab s travaille parfait
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import { useState, useEffect } from 'react';
import { ArticleService } from "../../Services/Article-Service";
import { Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { pink } from "@mui/material/colors";
import { Link } from 'react-router-dom';

const ListArticlesDatatable = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        GetListArticles();
    }, []);

    const GetListArticles = async () => {
        await ArticleService.fetchArticles().then((res) => { setArticles(res.data) });
    }
    const delArticle = async (_id) => {
        await ArticleService.deleteArticle(_id)

        var newarticles = articles.filter((item) => {
            return item._id !== _id
        })
        setArticles(newarticles);
    }

    const columns = [
        {
            name: "reference",
            label: "reference",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "designation",
            label: "designation",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "marque",
            label: "marque",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "prixAchat",
            label: "prixAchat",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "categorieID",
            label: "categorieID",
            options: {
                customBodyRender: (categ) => (
                    categ ? categ.nomcategorie : null
                )
            }
        },
        {
            name: "scategorieID",
            label: "scategorieID",
            options: {
                customBodyRender: (scateg) => (
                    scateg ? scateg.nomscategorie : "erreur"

                )
            }
        },
        {
            name: "imageartpetitf",
            label: "imageartpetitf",
            options: {
                customBodyRender: (rowData) => (
                    <img
                        style={{ height: 60, borderRadius: "50%", width: 100, height: 100 }}
                        src={rowData}
                        alt=""
                    />
                )
            }
        },
        {
            name: "_id",
            label: "Actions",
            options: {
                customBodyRender: (value) => (
                    <div>
                        <IconButton>
                            {
                                <Link to={"/Article/edit/" + value}>
                                    <EditIcon color='secondary' />

                                </Link>
                            }
                        </IconButton>
                        <IconButton onClick={() => {delArticle(value)}}>
                            <DeleteIcon sx={{ color: pink[500] }} />
                        </IconButton>
                    </div>
                )
            }
        },
    ];


    const options = {
        filterType: 'checkbox',
    };
    return (
        <div>
            <div style={{padding:5,margin:5}}>
                <Button color="success" startIcon={<AddCircleOutlineIcon/>}variant="contained">
                    {
                        <Link to={"/Articles/add"} style ={{textDecoration:"none",color:"white"}}>
                            ajouter
                            </Link>
                    }
                </Button>
            </div>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"Article List"}
                    data={articles}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
        </div>
    );
}

export default ListArticlesDatatable;
