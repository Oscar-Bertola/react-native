conts ItemDetail = ({product}) => {

    if (!product){
        return null
    }

return (
    <>
    <div>
    <h2> soy el ItemDetail</h2>
<h3>nombre del producto: {product.name}</h3>
<div>descripcion:{product.description} </div>

</div>
</>

)

}
export default ItemDetail