import { Link } from "react-router-dom";

const Categorias = () => {
    return (

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
                <button className='btn btn-secondary iconNav'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg iconNavBS"></i></Link></button>
            </li>
            <li className="nav-link">
                <button className='btn btn-secondary iconNav'><Link className="nav-link" to={"/category/1"}><i className="fa-regular fa-heart fa-lg iconNavBS"></i></Link></button>

            </li>

            <li className="nav-link">
                <button className='btn btn-secondary iconNav'><Link className="nav-link" to={"/category/2"}><i className="fa-solid fa-shower iconNavBS"></i></Link></button>

            </li>

            <li className="nav-link">
                <button className='btn btn-secondary iconNav'><Link className="nav-link" to={"/category/3"}><i className="fa-solid fa-fire iconNavBS"></i></Link></button>

            </li>
        </ul>

    );
}
export default Categorias;
