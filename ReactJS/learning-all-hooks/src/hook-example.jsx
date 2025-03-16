import React, { useState, useEffect } from "react";
import ListPosts from "./ListPosts";

const HookExample = () => {
  const [counter, setCounter] = useState(0);
  const [dataOfPosts, setDataOfPosts] = useState([]);

  const getPostsData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    setDataOfPosts(data);
    console.log("MY DATA 🚀", data);
  };

  useEffect(() => {
    console.log("re render");
    getPostsData();

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <p>
        Count : <strong>{counter}</strong>
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>{" "}
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <ListPosts data={dataOfPosts} />
    </div>
  );
};

export default HookExample;
