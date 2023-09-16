import brand from "../../img/Brand_1.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda Hard" title="Tienda Hard"></img>
        </Link>
    )
}

export default Brand;