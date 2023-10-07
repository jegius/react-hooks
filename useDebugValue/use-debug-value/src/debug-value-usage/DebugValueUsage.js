import React, { useState, useEffect, useDebugValue } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        axios(url)
            .then(response => {
                setLoading(false);
                setData(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [url]);

    useDebugValue(loading ? 'Loading..' : 'Fetched');

    return { data, loading, error };
}

function DebugValueUsage() {
    const { data, loading, error } = useFetch('https://api.github.com/users/octocat');

    if (loading) return 'Loading…';
    if (error) return 'Error!';

    return (
        <div className='App'>
            <h2>{data.login}</h2>
            <img src={data.avatar_url} alt={data.login} className='profile-img' />
        </div>
    );
}

export default DebugValueUsage;