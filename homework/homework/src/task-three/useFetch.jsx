import { useEffect, useState } from "react";

export default function useFetch() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const abortController = new AbortController();

  const fetchData = async (search) => {
    try {
      setLoading(true);
      console.log("first");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?search=${search}`,
        { signal: abortController.signal }
      );

      const answ = await response.json();
      setLoading(false);
      setPosts((_) => answ);
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error(`Error - ${error.name}: ${error.message}`);
    }
  };

  function debounce(fn, ms) {
    let timeout;

    return function () {
      const fnCall = async () => {
        await fn.apply({}, arguments);
      };

      clearTimeout(timeout);

      timeout = setTimeout(fnCall, ms);
    };
  }

  const delayedFetch = debounce(fetchData, 200);

  useEffect(() => {
    if (search.length > 0) delayedFetch(search);

    return () => {
      if (!abortController.aborted) abortController.abort();
    };
  }, [search]);

  useEffect(() => {}, []);

  function updateSearch(value) {
    setSearch((_) => value);
  }

  return [posts, loading, updateSearch];
}
