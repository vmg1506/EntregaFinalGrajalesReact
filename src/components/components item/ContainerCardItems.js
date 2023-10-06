import  { getBestItems } from '../../utils/firebase';
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../../styles/containerCardsItems.css"
import { useParams } from "react-router-dom";

import MoonLoader from "react-spinners/ClipLoader";

const ContainerCardItems = () => {
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBestItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false))
        

    })
    
    return(
        <div className="containerCardItems">
            {
                data.map( (product) => {
                    return (
                    <CardItem 
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firtsImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />  
                )
             })
            }
        </div>      
    )
}

export default ContainerCardItems;