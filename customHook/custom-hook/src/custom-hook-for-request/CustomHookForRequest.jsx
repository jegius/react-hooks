import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomHookForRequest.css';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };
}

function CustomHookForRequest() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return 'Loading...';
    if (error) return 'Error!';

    return (
        <div className="app">
            {data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    );
}

export default CustomHookForRequest;