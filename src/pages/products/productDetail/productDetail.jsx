import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./productDetail.css"
import Count from "../count/count";

function ProductDetail() {

    // Obtiene el parámetro "id" de la URL
    const { id } = useParams();

    console.log(id);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(response => response.json())
            .then(json => {
                const productoFiltrado = json.find(product => product.id == id);
                setProduct(productoFiltrado);
            })
        }, [id]);

    return (
        <div>
            <div className="card" style={{ width: '26rem' }}>
                <img src={product.image} className="card-img-top" alt="producto" />
                    <div className="card-body">
                        <h5 className="card-title">{product.marca}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product.modelo}</h6>
                        <p className="card-text">Descripción: {product.descripcion}</p>
                        <p className="card-text">Precio: ${product.precio}</p>
                        <Count stock={product.stock}/>
                        <button className="btn btn-primary">Agregar al carrito</button>
                        
                    </div>
            </div>
        </div>
    )
}

export default ProductDetail;