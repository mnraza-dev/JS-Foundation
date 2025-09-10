import React from 'react';
import { fetchPosts } from '../api';
import { useQuery } from '@tanstack/react-query';
const ReactQuery = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  return (
    <div className='bg-black'>
      <h1>With React Query</h1>
      <ul className=" p-4 my-2">
        {
          data?.map((item) => {
            const { body, title, id } = item;
            return <li className='border-l-2 my-4 px-2  border-amber-400 space-y-1' key={id}>
              <span className="text-sm text-white font-bold"> {id}</span>
              <span className="text-gray-100 text-sm font-bold "> {title}</span>
              <div className="text-sm text-gray-200">
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