// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useCollection } from '../hooks/useCollection'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'






const Home = () => {

    const { data, loading } = useCollection("products")

    return loading ? <LoaderComponent/> :  <ItemListContainer productsData={data} />
}

export default Home
