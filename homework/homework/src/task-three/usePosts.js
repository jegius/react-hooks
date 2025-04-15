import { useState, useEffect, useCallback } from 'react';

function usePosts() {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let controller = new AbortController();

    const fetchData = useCallback(async (query) => {
        if (!query) {
            setPosts([]);
            return;
        }

        setLoading(true);
        setError(null);

        controller.abort(); // Отменяем предыдущий запрос
        controller = new AbortController();

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`, {
                signal: controller.signal,
            });
            if (!response.ok) throw new Error('Failed to fetch posts');

            const data = await response.json();
            setPosts(data);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchData(search);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [search, fetchData]);

    return { search, setSearch, posts, loading, error };
}

export default usePosts;
