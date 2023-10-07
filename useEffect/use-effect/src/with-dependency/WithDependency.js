import React, { useState, useEffect } from 'react';
import './WithDependency.css';

const WithDependency = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('User');

    useEffect(() => {
        document.title = `${name}: You clicked ${count} times`;
    }, [count, name]);

    const changeName = () => {
        setName(name === 'User' ? 'Admin' : 'User');
    };

    return (
        <div className="my-component">
            <p>{name}, you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={changeName}>
                Change Name
            </button>
        </div>
    );
};

export default WithDependency;