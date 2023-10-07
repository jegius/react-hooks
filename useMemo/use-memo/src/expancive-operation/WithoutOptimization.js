import React, {useState} from 'react';
import {expensiveOperation} from './ExpensiveOperation';

const WithoutOptimization = () => {
    const [number, setNumber] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    const expensiveResult = expensiveOperation(number)

    return (
        <div className={darkMode ? 'app dark-mode' : 'app'}>
            <button className="toggle-button" onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}>
                Сменить тему
            </button>
            <input
                type="number"
                value={number}
                className="input-field"
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <div className="result-block">Результат ресурсоёмкой операции: {expensiveResult}</div>
        </div>
    );
};
export default WithoutOptimization;