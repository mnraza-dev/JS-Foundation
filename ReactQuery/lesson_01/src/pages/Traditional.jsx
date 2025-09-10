import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api';

const Traditional = () => {
  const [posts, setPosts] = useState(null);
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : []
      // console.log(res?.data);
    } catch (error) {
      console.log(" Error : ", error);
      return []
    }
  }
  useEffect(() => {
    getPostsData()
  }, [])

  return (
    <div>

      <ul className=" p-4 my-2">
        {
          posts?.map((item) => {
            const { body, title, id } = item;
            return <li key={id}>
             <span className="text-sm font-bold"> {id}</span>
             <span className="text-gray-500 text-sm font-bold "> {title}</span>
             <div className="text-sm text-red-600">
              {body}
             </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Traditional