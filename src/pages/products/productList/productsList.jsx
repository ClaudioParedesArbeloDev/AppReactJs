//Style
import "./productList.css"

//Modules
import { useState, useEffect } from 'react';

//Components
import Product from '../products/products';


//Functions
function ProductsList(props) {

    const [productosRenderizados, setProductosRenderizados] = useState([]);

    //función que se ejecutará cuando React detecte cambios en las dependencias del useEffect o cuando el componente se monte.
    useEffect(() => {
        //fetch se utiliza para realizar peticiones HTTP GET a un servidor.
        fetch("/products.json")
            //then se utiliza para especificar el código que se ejecutará después de que la petición se haya realizado.
            //response.json() se utiliza para convertir el contenido de la respuesta en un objeto JSON.
            .then(response => response.json())
            //json es el objeto que contiene los datos de la petición.
            .then(json => {
                //Si la categoría es "all", se renderizarán todos los productos.
                if (props.category === 'all') {
                    //map se utiliza para aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados.
                    //Product es una función componente que se utiliza para renderizar un producto.
                    //key se utiliza para identificar cada elemento del array y ayudar a React a identificar los elementos que han cambiado.
                    //El argumento data es el objeto JSON que contiene los datos del producto.
                    setProductosRenderizados(json.map(productos => <Product key={productos.id} data={productos} />));
    }else {
        //filter se utiliza para filtrar un array y devolver un nuevo array con los elementos que cumplen la condición.
        //El argumento productos es el objeto JSON que contiene los datos del producto.
        //categoria es la propiedad del producto que se utiliza para filtrar.
        //La condición se evalúa como productos.categoria === props.category.
        setProductosRenderizados(json.filter(productos => productos.categoria === props.category)
            //map se utiliza para aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados.
            .map(producto => <Product key={producto.id} data={producto} />));
    }
    //[]Al estar vacío, indica que este código se ejecutará solo una vez, cuando el componente se monte.
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