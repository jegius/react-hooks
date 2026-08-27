import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import RenderCounter from "./render-counter/RenderCounter";
import "./TaskTwo.css";

export default function TaskTwo() {
  const [, setCount] = useState(0);

  const update = useCallback(() => {
    setCount((counter) => counter + 1);
  }, []);

  const root = useMemo(() => <Root />, []);

  return (
    <div className="TaskTwo">
      <button onClick={update}>Обновить компонент</button>

      <RenderCounter />

      {root}
    </div>
  );
}

const Root = memo(() => {
  const valueRef = useRef("");

  const handleChange = useCallback((event) => {
    valueRef.current = event.target.value;
  }, []);

  return (
    <form className="form-container">
      Введенное значение: {valueRef.current}
      <Input onChange={handleChange} />
      <RenderCounter />
    </form>
  );
});

const Input = memo(({ onChange }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        name="value"
        onChange={onChange}
      />

      <RenderCounter />
    </div>
  );
});
