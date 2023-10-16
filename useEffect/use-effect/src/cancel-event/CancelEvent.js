import React, { useState, useEffect, useCallback } from 'react';
import './CancelEvent.css';

const CancelEvent = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setLoading] = useState(true);

    const fetchData = useCallback(async (value, abortController) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${value}`, { signal: abortController.signal });
            const data = await res.json();
            setData(data);
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.log('An error occurred:', error);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        fetchData(searchTerm, abortController);

        return () => abortController.abort();
    }, [searchTerm, fetchData]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="input"
            />
            { isLoading
                ? <div className="loading">Loading...</div>
                : <div>{ data && data.map(item => <div key={item.id} className="item">{item.title}</div>) }</div>
            }
        </div>
    );
};

export default CancelEvent;