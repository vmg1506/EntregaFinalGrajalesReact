import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Juegos"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Perifericos">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Consolas">
                    {props.itemTres}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;