import React, { useState, useCallback, useEffect } from "react";
import "./InfiniteLoop.css";

export default function InfiniteLoop() {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => {
        setValue(value + 1);
    }, [value]);

    useEffect(() => {
        increment();
    }, [increment]);

    return (
        <div className="app-container">
            <p className="app-text">Counter: {value}</p>
            <button className="app-button" onClick={increment}>Increment</button>
        </div>
    );
}