import React, { useState, useEffect } from 'react';
import './TaskThree.css';

// функция для получения данных с Mock API
const fetchData = async (search, signal) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, { signal });
  return await response.json();
}

export default function TaskThree() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const debounceTimer = setTimeout(() => {
      setLoading(true);

      fetchData(search, signal)
        .then(data => {
          setPosts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }, 500);
    const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  
    return () => {
      clearTimeout(debounceTimer);
      abortController.abort();
    };
  }, [search]);
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="TaskThree">
      <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts" />
      <h1>Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}