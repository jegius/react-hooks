import React, { useReducer } from 'react';
import { CountContext } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import './ReducerExample.css';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + state.step };
        case 'decrement':
            return { ...state, count: state.count - state.step };
        case 'reset':
            return initialState;
        case 'setStep':
            return { ...state, step: action.step };
        default:
            throw new Error();
    }
}

export default function Component() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ state, dispatch }}>
            <div className="container">
                <CounterDisplay />
                <CounterControls />
            </div>
        </CountContext.Provider>
    );
}