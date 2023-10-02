
import { useParams } from 'react-router-dom'
import { useItemCollection } from '../hooks/useItemCollection'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'


const ItemDetails = () => {


    //*uso los parametros con un useParams
    const{itemId} = useParams();

    //saco la data y el loading del useItemCollection(q es lo que devuelve la coleccion)
    const {data, loading} = useItemCollection("products", itemId)//itemId xq recibo x los parametros*

    //si está cargando q me muestre el loadercomponent y sino q me muestre
    //el itemdetailContainer con esa data
    return loading ? <LoaderComponent/> : <ItemDetailContainer productData={data}/>
}

export default ItemDetails

