

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail.jsx';


function ItemDetailContainer() {
    const { idProduct } = useParams(); 
    const [producto, setProducto] = useState(null); 
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        const db = getFirestore();
        const itemDoc = doc(db, "items", idProduct);

        getDoc(itemDoc).then(docSnapshot => {
            if (docSnapshot.exists()) {
                setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
            } else {
                setProducto(null);
            }
            setLoading(false);
        });
    }, [idProduct]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {producto ? <ItemDetail {...producto} /> : <p>Producto no encontrado</p>}
        </div>
    );
}

export default ItemDetailContainer;

