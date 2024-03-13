import React, { useCallback, useState } from 'react'
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate()
    return (
        <div className="TaskTwo">
            <button onClick={update}>Обновить компонент</button>
            {<RenderCounter />}
            <Root />
        </div>
    )
}

const Root = React.memo(() => { // React.memo предотвратит перерендеринг, когда пропсы и state не изменились
    const [value, setValue] = useState('');

    // Используем useCallback, чтобы функция не создавалась заново при каждом рендере
    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    }, []);

    return (
        <form className="form-container">
            Введенное значение: {value}
            {<RenderCounter />}
            <Input onChange={handleChange} />
        </form>
    )
});

// Враппим компонент Input с React.memo для предотвращения его перерисовки при каждом рендере Root
const Input = React.memo(({ onChange }) => {
    return (
        <div className="input-container">
            <input type="text" className="input-field" name="value" onChange={onChange} />
            {<RenderCounter />}
        </div>
    )
});

function useUpdate() {
    const [, setCount] = useState(0);
    const update = useCallback(() => { // Использование useCallback здесь означает, что функция будет одна и та же между рендерами
        setCount(c => c + 1)
    }, []);

    return update;
}

// Root обернут в React.memo, что предотвратит его перерендер, если пропсы и состояния не изменились.
// handleChange обернут в useCallback с пустым массивом зависимостей, это означает, что ссылка на функцию будет сохраняться между рендерами.
// Input тоже обернут в React.memo, теперь компонент не будет перерендериваться, если его пропсы не изменились.
// useUpdate теперь возвращает функцию, обернутую в useCallback, чтобы она не менялась и не вызывала перерендеры тех компонентов, функции которых зависят от useUpdate.