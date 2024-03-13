import React, { useCallback, useRef } from "react";
import RenderCounter from "./render-counter/RenderCounter";
import "./TaskTwo.css";

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

const Root = React.memo(() => {
  const valueRef = useRef("");
  const handleChange = useCallback((event) => {
    valueRef.current = event.target.value;
  }, []);

  return (
    <form className="form-container">
      Введенное значение: {valueRef.current}
      <RenderCounter />
      <Input onChange={handleChange} />
    </form>
  );
});

const Input = ({ onChange }) => {
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
};

function useUpdate() {
  const [, setCount] = React.useState(0);
  return () => {
    setCount((counter) => counter + 1);
  };
}
