import React, {useState} from 'react';
import './SimpleExample.css';

function useCounter(initialValue, min, max) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount < max ? prevCount + 1 : prevCount);
    };

    const decrement = () => {
        setCount(prevCount => prevCount > min ? prevCount - 1 : prevCount);
    };

    const resetCount = () => {
        setCount(initialValue);
    };

    return {count, increment, decrement, resetCount};
}

function SimpleExample() {
    const {count, increment, decrement, resetCount} = useCounter(0, 0, 10);

    return (
        <>
            <h1 className="title">Создание своих хуков</h1>
            <div className="app">
                <h1>{count}</h1>
                <div className="control-wrapper">
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={resetCount}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default SimpleExample;