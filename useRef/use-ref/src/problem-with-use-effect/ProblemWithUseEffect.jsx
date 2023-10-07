import React, { useReducer, useRef, useEffect } from 'react';
import './ProblemWithUseEffect.css';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            throw new Error();
    }
}

function ProblemWithUseEffect() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const stateRef = useRef(state.count);

    useEffect(() => {
        stateRef.current = state.count;
    });

    useEffect(() => {
        if (stateRef.current < 5) {
            alert(`Count is now ${stateRef.current}`);
        }
    }, [stateRef.current]);

    return (
        <div className='counter-app'>
            <p>Count: {stateRef.current}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        </div>
    );
}

export default ProblemWithUseEffect;