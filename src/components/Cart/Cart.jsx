import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";
import { useCarritoContext } from "../../Context/CarritoContext";

const Cart = () => {
    const {DarkMode} = useDarkModeContext()
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ? 
            <>
                <h1 className="carrito">Tu carrito se encuentra vacio...</h1>
                <button className= {`container ${DarkMode ? 'volverIC' : 'volverICD'}`}><Link  className="container nav-link" to={'/'}>Volver al inicio</Link></button>
            </>
            :
            <div className="containerAllCart cartContainer">
                {
                    carrito.map((prod) => 
                        <div className="containerCart card mb-3" key={prod.id} >
                            <div className="row g-0">
                                <div className="containerImgCart col-md-3">
                                    <img src={prod.img} alt="Producto" className="img-fluid rounded-start imgCart  " />
                                </div>
                            </div>
                            <div className="container col-md-8">
                                <div className="cardBody">
                                    <h5 className="card-title"> {`${prod.nombre}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className={`container col-6 btn ${DarkMode ? 'btnVerPrdoClaro' : 'btnVerPrdoClaro'}`} onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                            </div>

                        </div>      
                )}

                <div className="container">
                    <p className="resumenCompra">Total a Pagar: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className={`btn ${DarkMode ? 'btnVerPrdoClaro' : 'btnVerPrdoClaro'}`} onClick={emptyCart}>Vaciar Carrito</button>
                    <button className={`btn ${DarkMode ? 'btnVerPrdoDark' : 'btnVerPrdoDark'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                    <button className={`btn ${DarkMode ? 'btnVerPrdoDark' : 'btnVerPrdoDark'}`}><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                </div>   
            </div>

            }
        </>
        
    );
}

export default Cart;