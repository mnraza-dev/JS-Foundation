import React from 'react'

const CardItem = ({product}) => {
  return (
    <div className='cursor-pointer rounded-xl drop-shadow-md border border-gray-700  hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300'>
        <img src={product.images[0]} className='max-w-48 h-48 rounded-t-lg object-contain' alt={product.title} />
        <div className="p-4 w-44">
            <h3 className='text-md font-bold'>{product.title}</h3>
            <p clsassName='text-sm text=gray-500'>{product.brand}</p>
            <p clsassName='font-bold text-3xl '>${product.price}</p>
        </div>

    </div>
  )
}

export default CardItem