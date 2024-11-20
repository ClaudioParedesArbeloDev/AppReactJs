import './cart.css';

function Cart() {
    //logica
    function handlerClick(){
        alert("Hola");
    }

    

    return (
        <div className="cartPage">
            <h1>Cart</h1>
            <button onClick={()=>{alert("Esto en una funcion flecha")}} >No hace nada</button>
            <button onMouseOut={handlerClick}>Esto hace nada</button>
            <input type="text" onContextMenu={()=>{console.log("ud presiono el boton derecho")}} onFocus={()=>{console.log("Ud esta dentro de un input")}} onBlur={()=>{console.log("Ud esta fuera de un input")}}/>
        </div>
    )
}

export default Cart;