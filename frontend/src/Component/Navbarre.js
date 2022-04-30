import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import { makeStyles } from '@mui/styles';
const Navbarre = () => {
    
    const logout  = (res,req) => {
        localStorage.setItem("CC_Token",null)
     }
     const useStyles = makeStyles({
        paper: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: 1,
            backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        form: {
            width: '60%',
            marginTop: 1,
        },
        submit: {
            margin: 3
        },
        error: {
            color: 'red',
        },
    });
    const classes = useStyles();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Gestion Commercial</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Articles">Liste des articles</Nav.Link>
                        <Nav.Link as={Link} to="/ArticlesDatatable">data table articles</Nav.Link>
                        <Nav.Link as={Link} to="/Carouselhome">Carouselhome</Nav.Link>
                        <Nav.Link as={Link} to="/ArticleCards">Article Card</Nav.Link>
                    </Nav>
                    <Nav>
      <Nav.Link as={Link} to="/SignIn">SignIn</Nav.Link>
     
    </Nav>
                    <Form className="d-flex">
                    
                        <Button
                        type="submit"
                        fullWidth
                        variant="success"
                        className={classes.submit}
                        onClick={() => { logout() }}
                    >
                       
                       logout 
                    </Button>
                    </Form>
                    
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarre;
/*
<Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Gestion Commercial</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Articles">Liste des articles</Nav.Link>
                        <Nav.Link as={Link} to="/ArticlesDatatable">data table articles</Nav.Link>
                        <Nav.Link as={Link} to="/ArticleCards">Article Card</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
                </Container>
            </Navbar> */