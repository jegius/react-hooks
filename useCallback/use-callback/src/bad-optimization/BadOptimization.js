import React, { useState, useCallback } from "react";
import "./BadOptimization.css";

export default function BadOptimization() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    return (
        <div className="my-container">
            <p className="my-text">Counter: {counter}</p>
            <button className="my-button" onClick={increment}>Increment</button>
        </div>
    );
}