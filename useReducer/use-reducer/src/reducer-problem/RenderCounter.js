import React, { useEffect, useRef } from 'react';

export const RenderCounter = ({ children }) => {
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    return (
        <div>
            <div>Render Count: {renders.current}</div>
            {children}
        </div>
    );
};