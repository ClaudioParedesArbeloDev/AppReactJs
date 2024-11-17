
//Components
import ProductsList from "../productList/productsList";

//Functions
import {  useState } from 'react';

function ProductsListContainer() {
    //Logic
    const [category, setCategory] = useState('all');

    const menCategory = () => {
        setCategory('hombre');
    }

    const womenCategory = () => {
        setCategory('mujer');
    }

    const childrensCategory = () => {
        setCategory('niños');
    }

    const allCategory = () => {
        setCategory('all');
    }

    

    return (
        //Render
        <div>
            <div className="dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Categoria
                </button>
                <ul className="dropdown-menu">
                    <li><a onClick={allCategory} className="dropdown-item" href="#">Todos los productos</a></li>
                    <li><a onClick={menCategory} className="dropdown-item" href="#">Hombre</a></li>
                    <li><a onClick={womenCategory} className="dropdown-item" href="#">Mujer</a></li>
                    <li><a onClick={childrensCategory} className="dropdown-item" href="#">Niños</a></li>
                </ul>
            </div>
            <ProductsList  category={category}/>
        </div>
    )
}


export default ProductsListContainer;