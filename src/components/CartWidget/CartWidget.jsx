import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";
import { useDarkModeContext } from "../../Context/DarkModeContext";

const CartWidget = () => {
    const {DarkMode} = useDarkModeContext();
    const { getItemQuantity } = useCarritoContext()

    return (
        <>
            <button className={`btn ${DarkMode ? 'carritoClaro' : 'carritoClaro'}`}>
                <Link to={'/cart'} className="nav-link">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}

                </Link>

            </button>

        </>
    )
}

export default CartWidget;