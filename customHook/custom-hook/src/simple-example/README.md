# Компонент SimpleExample

Компонент `SimpleExample` - это простой счетчик, основанный на пользовательском хуке `useCounter`. Он позволяет пользователям увеличивать, уменьшать и сбрасывать счетчик с учетом заданных минимального и максимального значений.

## Подробности реализации

### Импорты

```jsx
import React, {useState} from 'react';
import './SimpleExample.css';
```

Здесь мы импортируем необходимые зависимости. `React` и `useState` будут использованы для обработки состояния компонента, `SimpleExample.css` - это внешний файл стилей.

### Кастомный хук useCounter

```jsx
function useCounter(initialValue, min, max) {
    const [count, setCount] = useState(initialValue);
```

Функция `useCounter` принимает начальное значение, минимальное и максимальное значения. `useState` затем используется для обработки текущего значения счетчика.

### Методы для управления счетчиком

```jsx
    const increment = () => {
        setCount(prevCount => prevCount < max ? prevCount + 1 : prevCount);
    };

    const decrement = () => {
        setCount(prevCount => prevCount > min ? prevCount - 1 : prevCount);
    };

    const resetCount = () => {
        setCount(initialValue);
    };
```

Методы `increment`, `decrement` и `resetCount` управляют значением счетчика, увеличивая его, уменьшая или сбрасывая до начального значения.

### Возвращаемые значения

```jsx
    return {count, increment, decrement, resetCount};
}
```

`useCounter` затем возвращает текущее значение счетчика и методы для его обновления, которые затем используются в компоненте `SimpleExample`.

### Использование хука

```jsx
function SimpleExample() {
    const {count, increment, decrement, resetCount} = useCounter(0, 0, 10);
```

В компоненте `SimpleExample`, `useCounter` вызывается с начальным значением 0 и границами от 0 до 10.

### Рендер компонента

```jsx
    return (
        <>
            <h1 className="title">Создание своих хуков</h1>
            <div className="app">
                <h1>{count}</h1>
                <div className="control-wrapper">
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={resetCount}>Reset</button>
                </div>
            </div>
        </>
    );
}
```

Компонент выводит текущее значение счетчика и кнопки для управления счетчиком.

### Экспорт модуля

```jsx
export default SimpleExample;
```

Компонент затем экспортируется для дальнейшего использования в других модулях.

## Важные нюансы

* Пользовательский хук `useCounter` предоставляет гибкую логику для счетчика, которую можно использовать с любыми начальными и граничными значениями.
* Ошибки не перехватываются в случае, если начальное значение, минимальное или максимальное значения указаны некорректно (например, min > max). Поэтому при использовании этого хука следует быть внимательными при задании этих значений.
* Для улучшения производительности следует избегать указания инлайн-функций в свойствах `onClick`, как в данном примере. Лучше создать методы класса для обработки нажатия кнопок и использовать их в обработчиках событий.