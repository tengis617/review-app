import React from 'react'
import { CoverImage } from '.';

const Card = ({ children, image, onClick }) => (
  <div onClick={onClick} className='my-2 mx-1 shadow-lg rounded'>
    {image ? <CoverImage image={image} /> : null}
    <div className="rounded-b p-4">
      {children}
    </div>
  </div>
)


export default Card