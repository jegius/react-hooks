import {useState, useEffect, useCallback} from 'react';
import {debounce} from 'lodash';


const useDataFetcher = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);

    const fetchData = useCallback(debounce(async (searchTerm, abortController) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${url}=${searchTerm}`, {signal: abortController.signal});
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }, 500), [url]);

    useEffect(() => {
        const abortController = new AbortController();
        if (search) {
            fetchData(search, abortController);
        }
    }, [search, fetchData]);

    return {search, setSearch, posts, isLoading};
};

export default useDataFetcher;