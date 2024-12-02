import { useState } from 'react';

import "./count.css"

function Count(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < props.stock){
        const newCount = count + 1;
        setCount(newCount);
        props.cantidades(newCount);
        }
    }   

    const decrement = () => {
        if(count > 0){
        const newCount = count - 1;
        setCount(newCount);
        props.cantidades(newCount);
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