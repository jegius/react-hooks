import React from 'react';
import './TaskThree.css';
import usePosts from './usePosts';

export default function TaskThree() {
    const { search, setSearch, posts, loading, error } = usePosts();

    return (
        <div className="TaskThree">
            <input 
                type="text" 
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search posts"
            />
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <h1>Posts</h1>
            <ul>
                {posts.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}
