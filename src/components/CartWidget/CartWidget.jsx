//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' ;
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../../components/CartWidget/CartWidget.scss'



const CartWidget = () => {

    const {cartItems} = useContext(CartContext);

    return (
    <div className= 'carritoContainer' >
        <FontAwesomeIcon icon={faCartShopping} className='carrito'/>
        <strong className='NumHardcodeado'> {cartItems} </strong> 
    </div>
    ); 
};

export default CartWidget;
