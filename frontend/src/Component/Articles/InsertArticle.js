import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Save';
import { Button, FormControl, TextField, MenuItem } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'filepond/dist/filepond.min.css';
import 'react-toastify/dist/ReactToastify.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FilePond, registerPlugin } from 'react-filepond'
import { CategorieService } from '../../Services/Categorie-Service';
import { ScategorieService } from '../../Services/Scategorie-Service';
import { ArticleService } from '../../Services/Article-Service';
//notification
import { ToastContainer, toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const InsertArticle = () => {
  let navigate=useNavigate();
  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [categorieID, setCatID] = useState("");
  const [categories, setCategories] = useState([]);
  const [prixAchat, setPrixAchat] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [marque, setMarque] = useState("");
  const [scategories, setscategories] = useState([]);
  const [scategorieID, setSCatID] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");
  const [files, setFiles] = useState("")
  const [filesm, setFilesm] = useState([])

  useEffect(() => {
    GetListCategories();
  }, []);

  const useStyles = makeStyles((theme) => ({
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    }
    }));

  const GetListCategories = async () => {
    await CategorieService.fetchCategories()
      .then((res) => {
        setCategories(res.data);
      });
  }

  const GetListSCategories = async (idcat) => {
    await ScategorieService.fetchScategorieByCat(idcat)
      .then((res) => {
        setscategories(res.data);
      });
  }
  const handleSubmit = async (event) => {
    //formulaire si on a une faute reste 
    event.preventDefault();
    var ig = [];
    filesm.forEach(element => {
      ig.push("/images/" + element.file.name);
    });
    const objetarticle = {
      reference: reference,
      designation: designation,
      prixAchat: prixAchat,
      prixVente: prixVente,
      marque: marque,
      qtestock: qtestock,
      caracteristiques: caracteristiques,
      imageartpetitf: files ? "images/" + files[0].file.name : null,
      imageartgrandf: ig,
      categorieID: categorieID,
      scategorieID: scategorieID
    };
   
    await ArticleService.addArticle(objetarticle).then((res) => {
      toast("Article ajouté", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/ArticlesDatatable")
    }).catch(error => {
      toast("Erreur Article non ajouté", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }


  return (
    
    <div>
      <ToastContainer />
      <div className="container">
        <form >
          <div>
            <Button style={{ padding: 15, margin: 20, width: 150 }}
              color="secondary"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={(event) => handleSubmit(event)}>
              Save
            </Button>
            <Button style={{ padding: 15, margin: 2, width: 150 }}
              color="primary"
              startIcon={<CancelIcon />}
              variant="contained">
              <Link to={"/ArticlesDatatable"} style={{ textDecoration: "none", color: "white" }}>
                Annuler
              </Link>
            </Button>
            <br/>
            <FormControl >
              <TextField
                variant="outlined"
                style={{ marginLeft: 8, marginTop: 20, width: 400 }}
                label="Désignation"
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                required />
            </FormControl>
            <FormControl  >
              <TextField
                variant="outlined"
                style={{ marginLeft: 20, marginTop: 20, width: 400 }}
                label="Référence"
                value={reference}
                onChange={e => setReference(e.target.value)}
                required />
            </FormControl> <br />

            <FormControl >
              <TextField
                variant="outlined"
                style={{ marginLeft: 8, marginTop: 20, width: 400 }}
                label="Prix Achat"
                type="number"
                value={prixAchat}
                onChange={e => setPrixAchat(e.target.value)}
              />
            </FormControl>
            <FormControl >
              <TextField
                variant="outlined"
                style={{ marginLeft: 20, marginTop: 20, width: 400 }}
                label="Prix Vente"
                type="number"
                value={prixVente}
                onChange={e => setPrixVente(e.target.value)}
              />
            </FormControl> <br />
          
            <FormControl >
              <TextField
                variant="outlined"
                style={{ marginLeft: 20, marginTop: 20, width: 400 }}
                label="Quantité Stock"
                type="number"
                value={qtestock}
                onChange={e => setQtestock(e.target.value)}
              />
            </FormControl> <br />
            <FormControl >
              <TextField
                fullWidth
                style={{ marginLeft: 8, marginTop: 20, width: 400 }}
                variant="outlined"
                label="Marque"
                value={marque}
                onChange={e => setMarque(e.target.value)}
              />
            </FormControl>
            <FormControl >
              <TextField
                fullWidth
                style={{ marginLeft: 20, marginTop: 20, width: 400 }}
                variant="outlined"
                label="Caractéristiques"
                value={caracteristiques}
                onChange={e => setCaracteristiques(e.target.value)}
              />
            </FormControl> <br />
            <FormControl style={{ width: 350 }}>
              <TextField
                fullWidth
                select
                label="Catégories"
                variant="outlined"
                value={categorieID}
                style={{ marginLeft: 8, marginTop: 20, width: 820 }}
                onChange={(event) => {
                  setCatID(event.target.value); 
                  GetListSCategories(event.target.value)
                }}
                helperText="Sélectionner une catégorie"
              >
                {
                  categories ?
                    categories.map(cat =>
                      <MenuItem key={cat._id}
                        value={cat._id}>{cat.nomcategorie}
                      </MenuItem>
                    )
                    : null
                }
              </TextField>
            </FormControl><br />
            <FormControl style={{ width: 350 }}>
              <TextField
                select
                label="S/Catégorie"
                style={{ marginLeft: 8, marginTop: 10, width: 820 }}
                value={scategorieID}
                variant="outlined"
                helperText="Sélectionner une s/catégorie"
                onChange={e => setSCatID(e.target.value)}
              >
                {
                  scategories ?
                    scategories.map((scat) =>
                      <MenuItem key={scat._id}
                        value={scat._id}>{scat.nomscategorie}</MenuItem>
                    )
                    : null
                }
              </TextField>
            </FormControl>
            <h4>Sélectionner une image</h4>
            <FormControl >
              <div style={{ width: 400, height: 50 }}>
                <FilePond
                  files={files}
                  allowMultiple={false}
                  onupdatefiles={setFiles}
                  labelIdle='<span class="filepond--label-action">Browse One</span>'
                />
              </div>
            </FormControl>
            <FormControl >
              <div style={{ width: 400, height: 40 }}>
                <FilePond
                  files={filesm}
                  allowMultiple={true}
                  onupdatefiles={setFilesm}
                  labelIdle='<span class="filepond--label-action">Browse Many</span>'
                />
              </div>
            </FormControl>


          </div>
        </form>

      </div>
    </div>
  );
}

export default InsertArticle;