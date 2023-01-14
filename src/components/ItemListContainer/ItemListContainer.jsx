
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getProducto, getProductos, updateProducto, cargarBDD } from '../../assets/FireBase.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
  
    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }


        //cargarBDD().then(productos => console.log (productos))
        
    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;