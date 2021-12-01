const data = [
    {
        "id":1,
        "image":"https://www.remerasya.com/pub/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/r/e/remera_negra_lisa_1.jpg",
        "title":"Remera lisa",
        "descripcion": "Consultar talles",
        "categoria":"Remeras",
        "price": "2500",
        "stock": "4"
    },
    {
        "id":2,
        "image":"https://tiendaulula.com.ar/media/catalog/product/cache/d03da38391751992e71919713a02c9be/m/o/modahombre-remeranegra_9.jpg",
        "title":"Remera estampada",
        "descripcion": "Consultar talles",
        "categoria":"Remeras",
        "price": "2500",
        "stock": "10"
    },
   
    {
        "id":3,
        "image":"https://www.digitalsport.com.ar/files/products/5f6a41ea81085-530418-1200x1200.jpg",
        "title":"bermuda cargo",
        "descripcion": "Consultar talle",
        "categoria":"bermudas",
        "price": "3000",
        "stock": "15"
    },
    
   
    {
        "id":4,
        "image":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/244/141/products/reverpass_51189-bg1-4ca273cc57c2ffffbe16013359641013-640-0.jpg",
        "title":"Pantalon chino",
        "descripcion": "Consultar talles",
        "categoria":"pantalones",
        "price": "3000",
        "stock": "4"
    },
    {
        "id":5,
        "image":"https://www.dhresource.com/0x0/f2/albu/g9/M00/71/F0/rBVaVVx80diAde8nAAIMNG1wcEM797.jpg",
        "title":"Pantalon jeans clasico",
        "descripcion": "Consultar talles",
        "categoria":"Jeans",
        "price": "3800",
        "stock": "4"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts