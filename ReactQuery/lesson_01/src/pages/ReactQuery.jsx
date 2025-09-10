import React from 'react';
import { fetchPosts } from '../api';
import { useQuery } from '@tanstack/react-query';
const ReactQuery = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  return (
    <div>
      <h1>With React Query</h1>
      <ul className=" p-4 my-2">
        {
          data?.map((item) => {
            const { body, title, id } = item;
            return <li key={id}>
              <span className="text-sm font-bold"> {id}</span>
              <span className="text-gray-500 text-sm font-bold "> {title}</span>
              <div className="text-sm text-blue-600">
                {body}
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}
export default ReactQuery