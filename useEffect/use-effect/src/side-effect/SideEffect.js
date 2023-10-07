import React, { useState, useEffect } from 'react';
import './SideEffect.css';

const SideEffect = () => {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if(response.ok) {
                    setData(result);
                } else {
                    throw new Error(result.message);
                }
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, [url]);

    const handleInputChange = event => {
        setUrl(event.target.value);
    }

    return (
        <div className="my-component">
            <input type="text" value={url} onChange={handleInputChange} placeholder="Enter API url" />
            {data && <p>{JSON.stringify(data)}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default SideEffect;