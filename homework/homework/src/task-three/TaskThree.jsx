import { useAPI } from './useAPI.jsx';
import './TaskThree.css';

export default function TaskThree() {
  const { search, posts, isLoading, error, eventHandler } = useAPI();

  return (
    <div className="TaskThree">
      <input
        value={search}
        onChange={eventHandler}
        placeholder="Search posts"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p role="alert">Error: {error}</p>}
      <h1>Posts</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
