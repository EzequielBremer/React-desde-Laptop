import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";
import { useCarritoContext } from "../../Context/CarritoContext";

const ItemDetail = ({item}) => {
    const {DarkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }   

    return (
        <div className="containerID">
            <div className="col-md-4 imgBody"  >
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Caracteristicas: {item.caracteristicas} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <button className={`btn ${DarkMode ? 'btnVerProdObs' : 'btnVerProdObsD'}`}><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;