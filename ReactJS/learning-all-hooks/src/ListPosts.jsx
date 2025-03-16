import React from "react";

const ListPosts = ({ data }) => {
  return (
    <div>
      <h1>List of All Post</h1>

      <ul>
        {data.map((item, i) => (
          <li>
            <a href="#">{item.title}</a>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPosts;
