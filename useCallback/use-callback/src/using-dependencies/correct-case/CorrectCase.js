import './CorrectCase.css';
import {useCallback, useState} from 'react';

function CorrectCase() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div className="wrapper">
            <button className="increment-button" onClick={increment}>
                Увеличить: {count}
            </button>
        </div>
    );
}

export default CorrectCase;