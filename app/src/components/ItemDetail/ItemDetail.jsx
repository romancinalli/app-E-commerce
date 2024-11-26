import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../Context';
import ItemQuantitySelector from './ItemQuantitySelector.jsx';
import './estilos.css';

function ItemDetail({ id, nombre, descripcion, precio, categoria }) {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const navigate = useNavigate();

    const handleAddToCart = (cantidad) => {
        const producto = { id, nombre, precio, descripcion, cantidad };
        agregarAlCarrito(producto);
    };

    const handleCheckout = () => {
        navigate('/checkout'); // Ruta para el Checkout
    };

    return (
        <div className="ItemDetail">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <h3>${precio}</h3>
            <p>Categoría: {categoria}</p>

            
            <ItemQuantitySelector onAdd={handleAddToCart} />

            
            <div className="buttonContainer"> 
                <button className="checkoutButton" onClick={handleCheckout}>Finalizar Compra</button>
            </div>
        </div>
    );
}

export default ItemDetail;
