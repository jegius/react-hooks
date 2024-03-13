import React from "react";
import "./TaskThree.css";
import useFetch from "./useFetch";

export default function TaskThree() {
  const [posts, loading, updateSearch] = useFetch();
  return (
    <div className="TaskThree">
      <input
        type="text"
        onChange={(event) => updateSearch(event.target.value)}
        placeholder="Search posts"
      />
      <h1>Posts</h1>
      <ul>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
