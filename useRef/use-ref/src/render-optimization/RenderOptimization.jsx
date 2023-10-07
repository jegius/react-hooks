import React, { useReducer, useRef } from 'react';
import './RenderOptimization.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            throw new Error();
    }
};

const RenderOptimization = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const countRef = useRef(0);
    const increment = () => {
        countRef.current++;
        console.log(`countRef current value: ${countRef.current}`);
    };

    return (
        <div className="container">
            <p>useReducer Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                +1
            </button>
            <hr />
            <p>useRef Count: {countRef.current} Компонент не перерисовывается</p>
            <button onClick={increment}>Бесконечно увеличивай</button>
        </div>
    );
};

export default RenderOptimization;