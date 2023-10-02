// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import { useCollection } from '../../hooks/useCollection';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../components/NavBar/Nav.scss'
import CartWidget from '../CartWidget/CartWidget';




const NavBar = () => {
    //traigo la coleccion que quiero mostrar en categorias, traigo data
    const { data, loading } = useCollection ("categories");
    console.log(data);

    return (
        <Navbar expand="lg" className="navPrincipal">
        <Navbar.Brand>
            <Link to="/"> Entrega Final</Link> 
        </Navbar.Brand>

        <Nav className="me-auto">
        <Nav.Link > 
            <Link  className='NavLink' to="/"> Home </Link> 
        </Nav.Link>

        {loading ? null : (
        <NavDropdown title="categorias" id="basic-nav-dropdown">
        {data[0].categories.map((category, index) => { 
            return ( 
            <NavDropdown.Item Key={index}> 
            <Link to={`/category/${category}`}>{category}</Link>
        </NavDropdown.Item> );
        })}
        </NavDropdown>
        )}
        </Nav>
        <NavDropdown.Divider />
        <CartWidget/>
        </Navbar>
    );
};

export default NavBar;



/*<Nav.Link href="#link" className='NavLink'>Laptops</Nav.Link>
        <Nav.Link href="#link" className='NavLink'>Smartphones</Nav.Link>
*/

/*<NavDropdown.Item id="basic-nav-dropdown-item"> <Link to="/category/zapatillas">zapatillas</Link> </NavDropdown.Item>
            <NavDropdown.Item id="basic-nav-dropdown-item"> <Link to="/category/ropa">ropa</Link> </NavDropdown.Item>
*/