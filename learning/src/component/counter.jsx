
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Counter.css'

const Counter = () => {

    const increment = () => { setUpdate(inital + 1)}
    const decrement = () => { setUpdate(inital - 1)}
    const [inital, setUpdate] = useState(0);
    return(
        <div className="counter">
            <h2>Card Counter</h2>
            <p>{inital}</p>
            <div className="s">
            <button onClick={increment}>True</button>
            <button onClick={decrement}>False</button>

            </div>
        </div>
    );
};
export default Counter