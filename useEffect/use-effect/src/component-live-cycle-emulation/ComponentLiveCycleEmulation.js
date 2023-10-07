import React, { useState, useEffect } from "react";
import './ComponentLiveCycleEmulation.css';

const ComponentLiveCycleEmulation = () => {
    const [count, setCount] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log("Component did mount");
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("Component did update");
    });

    // combination of componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log("Count has been updated");
    }, [count]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Component will unmount");
        }
    }, []);

    return (
        <div className="container">
            <p className="item" onClick={() => setCount(count + 1)}>Count: {count}</p>
        </div>
    );
};

export default ComponentLiveCycleEmulation;