import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ArticleService} from '../../Services/Article-Service';
import { useState,useEffect } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Listarticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    GetListArticles();
  
    }); 
  
    const GetListArticles=()=>{
        
      ArticleService.fetchArticles()
          .then((res) => {
            setArticles(res.data);
             
          });
      }
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Référence</StyledTableCell>
            <StyledTableCell align="left">Désignation</StyledTableCell>
            <StyledTableCell align="left">Marque</StyledTableCell>
            <StyledTableCell align="left">Quantité en stock</StyledTableCell>
            <StyledTableCell align="left">Prix</StyledTableCell>
            <StyledTableCell align="left">image</StyledTableCell>
            <StyledTableCell align="left">Catégorie</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.reference}</StyledTableCell>
              <StyledTableCell align="left">{row.designation}</StyledTableCell>
              <StyledTableCell align="left">{row.marque}</StyledTableCell>
              <StyledTableCell align="left">{row.qtestock}</StyledTableCell>
              <StyledTableCell align="left">{row.prixVente}</StyledTableCell>
              <StyledTableCell align="left"><img src={`${row.imageartpetitf}`} alt="" width="100"/></StyledTableCell>
              <StyledTableCell align="left">{row.categorieID.nomcategorie}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Listarticles