import { useState } from 'react';

import "./count.css"

function Count(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < props.stock){
        setCount(count + 1);
        props.cantidades(count);
        }
    }   

    const decrement = () => {
        if(count > 0){
        setCount(count - 1);
        props.cantidades(count);
        }
    }

    return (
        <div className="count">
            
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            
        </div>
    )
}

export default Count;