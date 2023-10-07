import './ProblemCase.css';
import {useCallback, useState} from 'react';

function ProblemCase() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, []);

    return (
        <div className="wrapper">
            <button className="increment-button" onClick={increment}>
                Увеличить: {count}
            </button>
        </div>
    );
}

export default ProblemCase;