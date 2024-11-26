

import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
