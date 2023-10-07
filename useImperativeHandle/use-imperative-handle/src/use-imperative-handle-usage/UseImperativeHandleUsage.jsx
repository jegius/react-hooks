import React, { useRef } from 'react';
import FancyButton from './FancyButton';
import './UseImperativeHandleUsage.css';

export default function UseImperativeHandleUsage() {
    const fancyButtonRef = useRef();

    return (
        <div className="container">
            <FancyButton
                ref={fancyButtonRef}
                onClick={() => fancyButtonRef.current.alterDom()}
            />
        </div>
    );
}