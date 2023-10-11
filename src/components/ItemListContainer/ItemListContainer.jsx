import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/ItemListContainer/Container.scss';



// eslint-disable-next-line react/prop-types
const ItemListContainer = ({productsData}) =>{
    console.log(productsData)
    //useNavigate nos permite navegar entre rutas dentro de nuestra aplicacion
        const navigate = useNavigate ();

        return ( 
            <div className='boxCardItemListContainer'>
                
                {productsData.map((product) => {
                    return (
                        
                        <Card style={{ width: '18rem' }} key={product.id}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                        <Card.Title>Nombre: {product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            origen: {product.origin}
                        </Card.Text>
                        <Card.Text>
                            color: {product.color}
                        </Card.Text>
                        <Card.Text>
                            {product.price} $
                        </Card.Text>
                        <Button 
                        className="button"
                        //"css-button-rounded--grey"
                        variant="primary" 
                        onClick={() => navigate(`/item/${product.id}`)}>
                        VER MÁS
                        </Button>
                        </Card.Body>
                        </Card>
                    );
            })} 
            </div>
            );
    };
    
    export default ItemListContainer ;