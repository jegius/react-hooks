import React, {useState} from 'react';
import './TaskThree.css';

// функция для получения данных с Mock API
const fetchData = async (search) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`);
    return await response.json();
}

export default function TaskThree() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);

    return (
        <div className="TaskThree">
            <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts"/>
            <h1>Posts</h1>
            <ul>
                {posts.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}