import React from "react";
import { useFetch } from "./CustomHook";
const App = () => {
  const { data, error, loading, reFetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div>
      <button onClick={reFetch}>Refetch</button>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};