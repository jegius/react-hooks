import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import './FocusOnChild.css';

const TextInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input type="text" className="input-field" ref={inputRef} />;
});

export function FocusOnChild() {
    const textInputRef = useRef();

    return (
        <div>
            <TextInput ref={textInputRef} />
            <button className="button" onClick={() => textInputRef.current.focus()}>
                Focus the input
            </button>
        </div>
    );
}