import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import '../../components/NavBarComponent/Nav.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_ram.png';


const  NavBarComponent = () => {
    return (
    <Navbar expand="lg" className="navPrincipal">
        
        <Navbar.Brand> <Link to="/"> <img className="imgLogoNav" src={logo} alt="" /> </Link> </Navbar.Brand>
        
        
            <Nav className="me-auto">
            <Nav.Link > <Link  className='NavLink' to="/"> Home </Link> </Nav.Link>
            <Nav.Link href="#link" className='NavLink'>Ubicacion</Nav.Link>
            <Nav.Link href="#link" className='NavLink'>Episodios</Nav.Link>

            <NavDropdown title="personajes" id="basic-nav-dropdown">
                <NavDropdown.Item id="basic-nav-dropdown-item"> <Link to="/category/Alien">Alien</Link> </NavDropdown.Item>
                <NavDropdown.Item id="basic-nav-dropdown-item"> <Link to="/category/Human">Human</Link> </NavDropdown.Item>
                <NavDropdown.Divider />

            </NavDropdown>
            </Nav>
        

        <CartWidget/>
        
    </Navbar>
    );
}

export default NavBarComponent;


