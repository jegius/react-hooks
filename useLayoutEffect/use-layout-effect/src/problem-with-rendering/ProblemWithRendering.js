import React, { useLayoutEffect, useState } from "react";
import "./ProblemWithRendering.css";

const fibonacci = num =>
    num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);

function ProblemWithRendering() {
    const [state, setState] = useState(1);

    useLayoutEffect(() => {
        fibonacci(state);
    }, [state]);

    return (
        <div className="container">
            {state}
            <button className="button" onClick={() => setState(state + 10)}>
                Увеличить
            </button>
        </div>
    );
}

export default ProblemWithRendering;