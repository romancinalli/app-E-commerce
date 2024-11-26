import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { CarritoProvider } from './components/Context';  
import Checkout from './components/checkout';



function App() {
    const [data, setData] = useState({});
    const db = getFirestore();

    const prodRef = doc(db, 'items', '8FTiuEhFSvjRc0w1Ob4v');

    getDoc(prodRef).then(snapshot => setData(snapshot.data()));

    return (
        <CarritoProvider>  
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idcategoria' element={<ItemListContainer />} />
                    <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </CarritoProvider>
        
    );
}

export default App;
