import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useDarkModeContext } from "../../Context/DarkModeContext";
import { getProducto } from "../../assets/FireBase";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {DarkMode} = useDarkModeContext()

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
        
    },);

    return (
        <div className={`card mb-3 container itemDetail ${DarkMode ? 'verProductoContainer' : 'verProductoContainerD'}`}>
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;