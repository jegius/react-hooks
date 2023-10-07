import React, { useState, useEffect, useRef } from 'react';
import './CallbackStorage.css';

const CountButton = ({ increment }) => {
    const [count, setCount] = useState(0);

    const incrementRef = useRef();
    incrementRef.current = increment;

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + incrementRef.current);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return <button className="count-button">Count: {count}</button>
};

const CallbackStorage = () => {
    const [increment, setIncrement] = useState(1);

    return (
        <div className='container'>
            <CountButton increment={increment} />
            <div className="increment-control">
                <button className="increment-button" onClick={() => setIncrement(increment + 1)}>
                    Increment interval
                </button>
                <span>Interval: {increment}</span>
            </div>
        </div>
    );
}

export default CallbackStorage;