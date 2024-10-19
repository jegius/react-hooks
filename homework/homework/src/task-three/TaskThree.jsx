import React from 'react';
import './TaskThree.css';
import useDataFetcher from "./useDataFetcher";

export default function TaskThree() {
    const {
        search, setSearch, posts, isLoading
    } = useDataFetcher('https://jsonplaceholder.typicode.com/posts?search')

    return <div className="TaskThree">
        <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts"/>
        <h1>Posts</h1>
        {
            isLoading ? <p>Loading</p> :
                <ul>
                    {posts.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
        }
    </div>
}