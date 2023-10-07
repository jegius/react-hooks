import React, { useEffect, useRef } from 'react';
import './BrowserEventsWithRef.css';

function BrowserEventsWithRef() {
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                alert('Клик за пределами кнопки!');
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className="app">
            <button ref={buttonRef}>Кликнуть меня</button>
        </div>
    );
}

export default BrowserEventsWithRef;