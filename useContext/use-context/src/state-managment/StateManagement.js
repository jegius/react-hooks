import React, {createContext} from 'react';
import './StateManagment.css';
import ProblemCase from './ProblemCase';
import OptimizedCase from './OptimizedCase';

export default function StateManagement() {
    return (
        <>
            <h1 className="title"> Проблемный кейс</h1>
            <ProblemCase />
            <h1 className="title"> Оптимизированный кейс</h1>
            <OptimizedCase />
        </>
    );
}