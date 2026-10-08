import { useEffect, useState } from "react";

const fetchData = async (search, signal) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?search=${search}`,
    {
      signal,
    },
  );

  return await response.json();
};

function usePosts() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      if (!search.trim()) {
        setPosts([]);
        return;
      }
      try {
        setLoading(true);
        const data = await fetchData(search, controller.signal);
        setPosts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return {
    search,
    setSearch,
    posts,
    loading,
  };
}

export default usePosts;
