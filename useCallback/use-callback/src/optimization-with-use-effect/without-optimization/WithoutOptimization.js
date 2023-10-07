import {useEffect, useState} from 'react';

export function WithoutOptimization() {
    const [search, setSearch] = useState('react');
    const [data, setData] = useState(null);
    const [functionCreationCounter, setFunctionCreationCounter] = useState(0);
    const [unrelatedState, setUnrelatedState] = useState(false);

    useEffect(() => {
        fetchData(search)
    }, [search, unrelatedState]);

    const fetchData = (query) => {
        setFunctionCreationCounter(prevState => prevState + 1);
        fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
            .then(response => response.json())
            .then(response => {
                setData(response?.hits.splice(0, 6));
            })
            .catch(console.error);
    };
    return (
        <div className="container">
            Функция создана {functionCreationCounter} количество раз
            <input
                className="input"
                onChange={e => setSearch(e.target.value)}
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