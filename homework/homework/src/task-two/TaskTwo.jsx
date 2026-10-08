import React from 'react';
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate();

    return (
        <div className="TaskTwo">
            <button onClick={update}>
                Обновить компонент
            </button>
            <RenderCounter />
            <Root />
        </div>
    );
}

const Root = React.memo(() => {
    return (
        <form className="form-container">
            <Form />
        </form>
    );
});

const Form = () => {
    const [value, setValue] = React.useState('');

    const handleChange = React.useCallback((event) => {
    setValue(event.target.value);
    }, []);

    return (
        <>
            <div>
                Введенное значение: {value}
            </div>
            <Input onChange={handleChange} />
        </>
    );
};

const Input = React.memo(({ onChange }) => {
    return (
        <div className="input-container">
            <input
                type="text"
                className="input-field"
                name="value"
                onChange={onChange}
            />
        </div>
    );
});

function useUpdate() {
    const [, setCount] = React.useState(0);

    return () => {
        setCount(counter => counter + 1);
    };
}