import React from 'react';
import './TaskThree.css';
import usePosts from './usePosts';

export default function TaskThree() {
    const {
        search,
        setSearch,
        posts,
        loading,
    } = usePosts();

    return (
        <div className="TaskThree">

            <input
                type="text"
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
                placeholder="Search posts"
            />

            {loading && <p>Loading...</p>}

            <h1>Posts</h1>

            <ul>

                {posts.map((item) => (
                    <li key={item.id}>

                        <h3>{item.title}</h3>

                        <p>{item.body}</p>

                    </li>
                ))}

            </ul>

        </div>
    );
}