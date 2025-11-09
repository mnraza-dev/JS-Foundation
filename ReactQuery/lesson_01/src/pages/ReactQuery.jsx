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
      <ul className="grid grid-cols-1 md:grid-cols-3  p-4 my-2">
        {
          data?.map((item) => {
            const { body, title, id } = item;
            return <li className='border-l-4 my-4 px-4 py-2   border-green-600 space-y-1 border-0 rounded-xl' key={id}>
              <div>
                <span className="text-xl text-white font-bold"> {id}</span>
                <span className="text-gray-100 text-2xl font-bold "> {title}</span>
              </div>
              <div className="text-lg text-gray-200">
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