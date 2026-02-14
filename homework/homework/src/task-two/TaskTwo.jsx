import React, { memo, useCallback, useRef } from 'react';
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
  const update = useUpdate();
  return (
    <div className="TaskTwo">
      <button onClick={update}>Обновить компонент</button>
      <RenderCounter />
      <Root />
    </div>
  );
}

const Root = memo(() => {
  const valueRef = useRef(''); // Чтобы соответствовать ТЗ (Root не ререндерится при изменении input)
  const handleValueChange = useCallback((nextValue) => {
    valueRef.current = nextValue;
  }, []);
  return (
    <form className="form-container">
      Введенное значение: {valueRef.current}
      <RenderCounter />
      <Input onChangeValue={handleValueChange} />
    </form>
  );
});

const Input = memo(({ onChangeValue }) => {
  const [localValue, setLocalValue] = React.useState('');
  const handleChange = useCallback(
    (event) => {
      const next = event.target.value;
      setLocalValue(next); // ререндерится только Input
      onChangeValue(next); // Root не ререндерится (меняем ref)
    },
    [onChangeValue],
  );
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        name="value"
        value={localValue}
        onChange={handleChange}
      />
      <RenderCounter />
    </div>
  );
});

function useUpdate() {
  const [, setCount] = React.useState(0);
  return useCallback(() => {
    setCount((counter) => counter + 1);
  }, []);
}
