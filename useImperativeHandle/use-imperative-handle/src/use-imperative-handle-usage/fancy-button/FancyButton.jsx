import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const FancyButton = forwardRef(({onClick}, ref) => {
    const buttonRef = useRef();
    const [buttonText, setButtonText] = useState('Fancy Button');

    useImperativeHandle(ref, () => ({
        alterDom: () => {
            buttonRef.current.style.backgroundColor = 'lightgreen';
            buttonRef.current.style.color = 'white';
            setButtonText('Button clicked!');
        }
    }));

    return <button ref={buttonRef} onClick={onClick}>{buttonText}</button>
});

export default FancyButton;