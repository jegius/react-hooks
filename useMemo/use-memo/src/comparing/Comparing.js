import React, {useState, useMemo} from 'react';
import './Comparing.css';

function Comparing() {
    const initialColorState = {
        color: {
            r: 255,
            g: 255,
            b: 255
        }
    };

    const [colorState, setColorState] = useState(initialColorState);

    // const memoizedColor = useMemo(() => {
    //     return `rgb(${colorState.color.r},${colorState.color.g},${colorState.color.b})`;
    // }, [colorState]);

    const memoizedColor = useMemo(() => {
        return `rgb(${colorState.color.r},${colorState.color.g},${colorState.color.b})`;
    }, [colorState.color.r, colorState.color.g, colorState.color.b]);

    const changeColor = () => {
        initialColorState.color.r = Math.floor(Math.random()*256);
        initialColorState.color.g = Math.floor(Math.random()*256);
        initialColorState.color.b = Math.floor(Math.random()*256);

        setColorState(initialColorState);
    };

    return (
        <div className="component" style={{backgroundColor: memoizedColor}}>
            <p>Текущий цвет: {memoizedColor}</p>
            <button className="button" onClick={changeColor}>Сменить цвет</button>
        </div>
    );
}

export default Comparing;