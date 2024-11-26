
import { useNavigate } from 'react-router-dom';
import './estilos.css';

function Item({ id, nombre, descripcion, precio, imagen }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            
            <img src={`/productos/${imagen}`} alt={nombre} className="product-image" />
            <h3>{nombre}</h3>
            <h2>${precio}</h2>
            <h4>VER DETALLE</h4>
        </div>
    );
}

export default Item;
