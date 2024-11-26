

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';  
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Item from './Item.jsx';
import './estilos.css';


function ItemListContainer() {
    const { idcategoria } = useParams(); 
    const [productos, setProductos] = useState([]); 

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection).then(snapshot => {
            const productosFirebase = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosFirebase);
        });
    }, []);

    
    const productosFiltrados = idcategoria
        ? productos.filter(prod => prod.categoria === idcategoria)
        : productos;

    return (
        <div className="itemContainer">
            {productosFiltrados.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
}

export default ItemListContainer;

