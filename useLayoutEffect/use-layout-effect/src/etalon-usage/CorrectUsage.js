import React, {useRef, useState, useLayoutEffect} from 'react';
import './CorrectUsage.css';

function CorrectUsage() {
    const inputRef = useRef(null);
    const divRef = useRef(null);

    const [value, setValue] = useState('');
    const [width, setWidth] = useState('0px');

    useLayoutEffect(() => {
        window.requestAnimationFrame(() => {
            if (divRef.current) {
                setWidth(`${divRef.current.offsetWidth}px`);
            }
        });
    }, [value]);

    return (
        <div className="container">
            <input ref={inputRef}
                   className="input"
                   value={value}
                   style={{width}}
                   onChange={(event) => setValue(event.target.value)}
            />
            <div ref={divRef} style={{
                position: 'absolute',
                visibility: 'hidden',
                height: 'auto',
                width: 'auto',
                whiteSpace: 'nowrap',
                fontSize: '16px',
                fontFamily: 'Arial',
                fontWeight: 'normal',
                letterSpacing: 'normal'
            }}>{value}</div>
        </div>
    );
}

export default CorrectUsage;