

import { useContext } from 'react';
import { CarritoContext } from '../Context';
import carritoImg from '../../assets/carrito.png'; 
import './Navbar.css';


function CartWidget() {
    const { carrito } = useContext(CarritoContext);

    
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <div className="cart-widget">
            <img src={carritoImg} alt="Carrito" className='cart-icon'/>
            <span className="cart-count">{totalCantidad}</span> 
        </div>
    );
}

export default CartWidget;
