import React, {useEffect, useRef} from 'react';
import './RenderCounter.css'

const RenderCounter = () => {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return <div className="counter-wrapper">
        <span className="render-count">Количество рендеров: {renderCount.current}</span>
    </div>;
};

export default RenderCounter;