import React, { useState, useEffect, useRef, useCallback } from 'react';
import { debounce } from 'lodash';
import './CancelEvent.css';

const CancelEvent = () => {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setLoading] = useState(true);
    const abortControllerRef = useRef(null);

    const debouncedFetchData = useCallback(debounce(async (value) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${value}`, { signal: abortControllerRef.current.signal });
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
    }, 500), []);

    useEffect(() => {
        setLoading(true);
        debouncedFetchData(searchTerm);

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [searchTerm, debouncedFetchData]);

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