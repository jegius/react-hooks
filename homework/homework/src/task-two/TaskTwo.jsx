import React, { useState, useCallback, memo } from 'react';
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate();
    
    return (
        <div className="TaskTwo">
            <button onClick={update}>Обновить компонент</button>
            <Root />
        </div>
    );
}

const Root = () => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    return (
        <form className="form-container">
            <RenderCounter /> {/* Оставляем RenderCounter только здесь */}
            Введенное значение: {value}
            <MemoizedInput onChange={handleChange} />
        </form>
    );
};

// Убираем RenderCounter из Input
const MemoizedInput = memo(({ onChange }) => {
    return (
        <div className="input-container">
            <input type="text" className="input-field" name="value" onChange={onChange} />
        </div>
    );
});

function useUpdate() {
    const [, setCount] = useState(0);
    
    return useCallback(() => {
        setCount(counter => counter + 1);
    }, []);
}
