import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./productDetail.css"
import Count from "../count/count";

function ProductDetail() {

    // Obtiene el parámetro "id" de la URL
    const { id } = useParams();

    //Se utiliza para almacenar el producto en un estado
    const [product, setProduct] = useState([]);

    //Se utiliza para ejecutar una función cuando cambia el estado de product
    useEffect(() => {
        //fetch se utiliza para realizar peticiones HTTP GET a un servidor.
        fetch("/products.json")
            //then se utiliza para especificar el código que se ejecutará después de que la petición se haya realizado.
            //response.json() se utiliza para convertir el contenido de la respuesta en un objeto JSON.
            .then(response => response.json())
            .then(json => {
                //map se utiliza para aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados.
                //El argumento productos es el objeto JSON que contiene los datos del producto.
                //id es la propiedad del producto que se utiliza para filtrar.
                //La condición se evalúa como productos.id === id.
                const productoFiltrado = json.find(product => product.id == id);
                setProduct(productoFiltrado);
            })
        }, [id]);

    return (
        <div className="wrapProductDetail">
            <div className="card" style={{ width: '26rem' }}>
                <img src={product.image} className="card-img-top" alt="producto" />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{product.marca}</h5>
                        <h6 className="card-subtitle mb-2 text-muted fw-bold">{product.modelo}</h6>
                        <p className="card-text">Descripción: {product.descripcion}</p>
                        <p className="card-text">Precio: €{product.precio}</p>
                        <Count stock={product.stock}/>
                        <button className="btn btn-warning">Agregar al carrito</button>
                        
                    </div>
            </div>
        </div>
    )
}

export default ProductDetail;