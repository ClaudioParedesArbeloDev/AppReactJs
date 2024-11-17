//Style
import "./productList.css"

//Modules
import { useState, useEffect } from 'react';

//Components
import Product from './products';


//Functions
function ProductsList(props) {

    const [productosRenderizados, setProductosRenderizados] = useState([]);

    
    useEffect(() => {
        fetch("/products.json")
            .then(response => response.json())
            .then(json => {
                if (props.category === 'all') {
                    setProductosRenderizados(json.map(productos => <Product key={productos.id} data={productos} />));
    }else {
        setProductosRenderizados(json.filter(productos => productos.categoria === props.category)
            .map(producto => <Product key={producto.id} data={producto} />));
    }

    }, [])});



//Logic
return (
    <div >

        <div className="wrapProductsList">
            {productosRenderizados}
        </div>

    </div>
)
}

export default ProductsList;