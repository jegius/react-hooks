import React from 'react';
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

const TaskTwo = React.memo(() => {
  const update = useUpdate();

  return (
    <div className="TaskTwo">
      <button onClick={update}>Обновить компонент</button>
      {}
      <RenderCounter />
      {}
      <Root />
    </div>
  );
});

export default TaskTwo;

import React from 'react';
я
const Root = React.memo(() => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <form className="form-container">
      Введенное значение: {value}
      {}
      <Input onChange={handleChange} />
    </form>
  );
});

export default Root;

import React from 'react';

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

export default Input;

import React, { useEffect, useRef } from 'react';
import './RenderCounter.css';

const RenderCounter = React.memo(() => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="counter-wrapper">
      <span className="render-count">Количество рендеров: {renderCount.current}</span>
    </div>
  );
});

export default RenderCounter;

function useUpdate() {
  const [, setCount] = React.useState(0);
  return () => setCount(c => c + 1);
}
