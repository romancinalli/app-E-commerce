import React, { useState } from 'react';
import './estilos.css'

function ItemQuantitySelector({ onAdd }) {
    const [cantidad, setCantidad] = useState(1);

    const handleIncrement = () => {
        setCantidad(cantidad + 1);
    };

    const handleDecrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    

    return (
        <div className='buttonContainer'>
            <button onClick={handleDecrement}>-</button>
            <span>Cantidad {cantidad}</span>
            <button  onClick={handleIncrement}>+</button>
            <button className='buttonDetail' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            
        </div>
    );
}

export default ItemQuantitySelector;
