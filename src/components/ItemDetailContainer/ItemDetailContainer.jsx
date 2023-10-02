
// eslint-disable-next-line no-unused-vars
import React from 'react'
//import { Button } from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetailContainer.scss'



// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({productData}) => {

    const[stock, setStock] = React.useState(10);
    const[onAdd, setOnAdd] = React.useState(false);


    return (
        <div className='boxCardItemDetailContainer'>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productData.thumbnail} />
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>
                {productData.description}
                </Card.Text>
                <Card.Text>
                origen:{productData.origin}
                </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item> {productData.price}</ListGroup.Item>
                <ListGroup.Item> {productData.rating}</ListGroup.Item>
            </ListGroup>

            <Card.Body>
            <ItemCount/>
                {stock >= 5 ? (
                    <strong> Stock Disponible </strong>
                    
                ) : (
                    <strong> Ultimas Unidades disponibles </strong>
                )} 
                
            </Card.Body>
        </Card>
        
        </div>
        );
}

export default ItemDetailContainer;
