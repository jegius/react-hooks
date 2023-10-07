import React, { useContext } from 'react';
import { CountContext } from './CounterContext';
import './CounterControls.css';

export default function CounterControls() {
    const { dispatch } = useContext(CountContext);

    const handleStepChange = (ep) => {
        dispatch({ type: 'setStep', step: Number(ep.target.value) })
    }

    return (
        <div className="container">
            <div>
                <label>
                    Increment value:
                    <input type="number" onChange={handleStepChange} />
                </label>
            </div>
            <div className="control-wrapper">
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}