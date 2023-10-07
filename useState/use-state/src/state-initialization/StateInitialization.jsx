import React, { useState } from 'react';
import styles from './StateInitialization.module.css';


function getRandomNumber() {
    console.log('Генерация случайного числа');
    return Math.random();
}

export function StateInitialization() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(() => {
        console.log('Вычисление начального значения count2');
        return getRandomNumber();
    });

    return (
        <div>
            <p>Счетчик 1: {count1}</p>
            <p>Счетчик 2: {count2}</p>
            <button className={styles.button} onClick={() => setCount1(count1 + 1)}>Увеличить счетчик 1</button>
            <button className={styles.button} onClick={() => setCount2(count2 + 1)}>Увеличить счетчик 2</button>
        </div>
    );
}