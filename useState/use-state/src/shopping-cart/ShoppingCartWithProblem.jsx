import React, { useState } from 'react';
import styles from './ShoppingCart.module.css';

export function ShoppingCartWithProblem() {
    const [itemsCount, setItemsCount] = useState(0);
    const [clickCounter, setClickCounter] = useState(0);

    const addToCart = () => {
        setClickCounter(clickCounter + 1)
        // Симуляция асинхронной операции добавления товара в корзину
        setTimeout(() => {
            setItemsCount(itemsCount + 1);
        }, 1000);
    };

    return (
        <div className={styles.shoppingCart}>
            <p>Количество кликов на кнопку: {clickCounter}</p>
            <p>Количество товаров в корзине: {itemsCount}</p>
            <button className={styles.addButton} onClick={addToCart}>Добавить в корзину</button>
        </div>
    );
}