import React, { useState, useEffect } from 'react';
import './DataFetcher.css';

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            {!data ? "Loading..." : (
                <>
                    {data.map(item =>
                        <div className="item" key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DataFetcher;