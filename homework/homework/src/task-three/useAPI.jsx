import { useMemo, useState, useEffect, useRef } from 'react';

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const useAPI = () => {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const abortRef = useRef(null);

  const debouncedFetch = useMemo(
    () =>
      debounce(async (nextSearch) => {
        if (abortRef.current) {
          abortRef.current.abort();
        }

        const controller = new AbortController();
        abortRef.current = controller;

        try {
          setIsLoading(true);
          setError('');

          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?search=${encodeURIComponent(nextSearch)}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();
          setPosts(data);
        } catch (e) {
          if (e.name !== 'AbortError') {
            setError(e.message || 'Ошибка загрузки');
            setPosts([]);
          }
        } finally {
          setIsLoading(false);
        }
      }, 500),
    [],
  );

  const eventHandler = (event) => {
    const nextSearch = event.target.value;
    setSearch(nextSearch);
    debouncedFetch(nextSearch);
  };

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, []);

  return { search, posts, isLoading, error, eventHandler };
};
