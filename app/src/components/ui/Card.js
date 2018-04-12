import React from 'react'


const Card = ({ children, image }) => (
  <div className='m-2 max-w-md w-full shadow-lg rounded'>
  {
    image ?
      <div className=" h-48 flex-none bg-cover rounded-t text-center overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
      </div>
      : null
  }
    <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
    {children}
    </div>
  </div>
)


export default Card