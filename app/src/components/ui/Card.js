import React from 'react'


const Card = ({ children, image, onClick }) => (
  <div onClick={onClick} className='my-2 mx-1 shadow-lg rounded'>
  {
    image ?
      <div className="h-48 flex-none bg-cover rounded-t text-center overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
      </div>
      : null
  }
    <div className="rounded-b p-4">
    {children}
    </div>
  </div>
)


export default Card