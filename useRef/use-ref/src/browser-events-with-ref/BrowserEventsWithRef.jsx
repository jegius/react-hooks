import React, {useEffect, useRef, useState} from 'react';
import './BrowserEventsWithRef.css';

function BrowserEventsWithRef() {
    const buttonRef = useRef(null);
    const [message, setMessage] = useState();

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setMessage('Клик за пределами кнопки!');
            } else {
                setMessage('Клик на кнопку!');
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className="app">
             <h3>{message}</h3>
            <button ref={buttonRef}>Кликнуть меня</button>
        </div>
    );
}

export default BrowserEventsWithRef;