import './home.css';
import { useState, useEffect } from 'react';

function Home() {
    const [products, setProducts] = useState([]);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    // Cargar los productos
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Cambiar a un producto aleatorio cada 5 segundos
    useEffect(() => {
        if (products.length === 0) return; // No iniciar el intervalo si no hay productos

        const interval = setInterval(() => {
            setCurrentProductIndex(() => {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * products.length); // Generar un índice aleatorio
                } while (randomIndex === currentProductIndex); // Evitar repetir el mismo índice
                return randomIndex;
            });
        }, 5000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, [products, currentProductIndex]); // Depender del array de productos y del índice actual

    // Producto actual
    const currentProduct = products[currentProductIndex] || {};

    return (
        <div>
            {products.length > 0 ? (
                <div className='productoHome'>
                    <img src={currentProduct.image} className='productImage' alt='Producto' />
                    <h2 className='marcaProducto'>{currentProduct.marca || 'Producto sin nombre'}</h2>
                    <h3 className='modeloProducto'>{currentProduct.modelo || 'Producto sin modelo'}</h3>
                    <p className='descripcionProducto'>{currentProduct.descripcion|| 'Sin descripción'}</p>
                    <p className='precioProducto'>Precio: €{currentProduct.precio || 'Sin precio'}</p>

                </div>
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
}

export default Home;
