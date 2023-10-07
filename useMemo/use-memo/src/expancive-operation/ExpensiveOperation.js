import React from 'react';
import './ExpensiveOperation.css';
import WithOptimization from './WithOptimization';
import WithoutOptimization from './WithoutOptimization';

export const expensiveOperation = (number) => {
    console.log('Вызывается ресурсоёмкая операция');
    return Array(number * 10e6).fill(0).reduce((a, b, currentIndex) => a + currentIndex, 0);
};
const ExpensiveOperation = () => {
    return (
        <>
            <div className="app-wrapper">
                <WithOptimization />
                <WithoutOptimization />
            </div>
        </>
    );
};

export default ExpensiveOperation;