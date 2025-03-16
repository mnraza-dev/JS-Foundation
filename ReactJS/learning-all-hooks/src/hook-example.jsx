import React, { useState, useEffect } from "react";
import ListPosts from "./ListPosts";
import { useLayoutEffect } from "react";

const HookExample = () => {
  const [counter, setCounter] = useState(0);
  const [dataOfPosts, setDataOfPosts] = useState([]);

  const getPostsData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    setDataOfPosts(data);
    console.log("MY DATA 🚀", data);
  };
  useLayoutEffect(() => {
    console.log(
      "useLayoutEffect() hook 🚀 Runs after first render before browser paints"
    );
  }, []);
  useEffect(() => {
    console.log("useEffect() hook 🚀 Runs after the first render ");
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
