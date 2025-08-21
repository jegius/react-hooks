import React, { useState, useRef, useEffect } from 'react';
import './TaskThree.css';

const fetchData = async (search, signal) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, { signal });
  return await response.json();
};

function useFetch(fetchData, searchTerm, delay = 500) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeout = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (!searchTerm) {
      setData([]);
      return;
    }

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsLoading(true);

      fetchData(searchTerm, controller.signal)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          if (error.name === 'AbortError') return; 
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, delay);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [searchTerm]);

  return { data, isLoading };
}

export default function TaskThree() {
  const [search, setSearch] = useState('');

  const { data: posts, isLoading } = useFetch(fetchData, search);

  return (
    <div className="TaskThree">
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search posts"
        value={search}
      />

      {isLoading && <p>Загрузка...</p>}

      <h1>Posts</h1>

      <ul>
        {posts.length > 0 ? (
          posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <p>Нет результатов</p>
        )}
      </ul>
    </div>
  );
}
