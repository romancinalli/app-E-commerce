import {collection, getDocs, getFirestore} from 'firebase/firestore';
import { useEffect } from 'react';

function Collection(){

    useEffect(()=>{
        const db = getFirestore();

        const itemCollection=collection(db,"items")

        getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>console.log(docu.data())))
    },[])
    return(
        <div></div>
    )
}

export default Collection; 