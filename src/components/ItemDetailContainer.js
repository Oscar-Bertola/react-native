import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const productosEj = {
"id":10,
"name":"remera lisa",
"description": "variedad de colores, tela de primera calidad",
"image":" https://www.remerasya.com/pub/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/r/e/remera_negra_lisa_1.jpg "


};


const ItemDetailContainer = () => {

const [product, setProducts] useState({})

useEffect (() => {
setTimeout((setProducts(productosEj)), 2000)
console.log(product)

},[])


return(

    <>
    <h3> Soy ItemDetailContainer</h3>
    <ItemDetail
    product={product}
    />
    </>
)

}
export default ItemDetailContainer


