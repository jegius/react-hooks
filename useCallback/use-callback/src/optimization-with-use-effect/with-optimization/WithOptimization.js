import {useCallback, useEffect, useState} from 'react';
import { debounce } from 'lodash';

export function WithOptimization() {
    const [query, setQuery] = useState('react');
    const [data, setData] = useState(null);
    const [functionCreationCounter, setFunctionCreationCounter] = useState(0);
    const [unrelatedState, setUnrelatedState] = useState(false);

    const incrementCounter = useCallback(() => {
        setFunctionCreationCounter(prevState => prevState + 1)
    }, []);

    const fetchData = useCallback(debounce((request) => {
        incrementCounter();
        fetch(`https://hn.algolia.com/api/v1/search?query=${request}`)
            .then(response => response.json())
            .then(response => {
                setData(response?.hits.splice(0, 6));
            })
            .catch(console.error);
    }, 500), [incrementCounter]);

    useEffect(() => {
        fetchData(query);
    }, [query]);

    return (
        <div className="container">
            Функция создана {functionCreationCounter} количество раз
            <input
                className="input"
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for articles..."
            />
            {data && <div className="results">
                {data.map((item, index) => (
                    <a key={index} className="link" href={item.url}> {item.title} </a>
                ))}
            </div>}
            <button onClick={() => setUnrelatedState(!unrelatedState)}>Change unrelated state</button>
        </div>
    );
}