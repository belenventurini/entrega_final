import React from 'react';
import { getDoc, doc, getFirestore } from 'firebase/firestore';


export const useItemCollection = ( collectionName, itemId) => {
    //estado donde almaceno la data que me trae 
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    //creo el efecto donde creo la llamada y la controlo
    React.useEffect(() =>{
        //dataBase de firestore
        const db = getFirestore();
        //un unico item, consulto un documento->basedeDato->colecciondelHook->itemporId
        const item = doc(db, collectionName, itemId);

        getDoc(item)
        .then((snapshot) => { setData({ id: snapshot.id, ...snapshot.data() }); })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [itemId]);

    return { data, loading };
};


