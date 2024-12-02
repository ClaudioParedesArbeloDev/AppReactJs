import { Link } from "react-router-dom";


import Count from "../count/count";

import "./products.css"



function Products(props) {
    

    const { id, marca, modelo, precio, image, stock} = props.data;

       

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="producto" />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{marca}</h5>
                        <h6 className="card-subtitle mb-2 text-muted fw-bold">{modelo}</h6>
                        <p className="card-text">Precio: ${precio}</p>
                        
                        <Link to={`/products/${id}`} className="btn btn-warning">Ver Producto</Link>
                        
                    </div>
            </div>

        </div>
    )
}

export default Products;