import { useEffect, useState } from "react";

const fetchData = async (search, signal) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?search=${search}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const usePosts = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setPosts([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
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
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [search]);

  return {
    search,
    setSearch,
    posts,
    loading,
  };
};
