import React from 'react'

const CoverImage = ({ image }) => (
  <div className='h-48 md:h-half-screen lg:h-half-screen flex-content-center flex-none bg-cover text-center overflow-hidden' style={{ backgroundImage: `url(${image})` }}>
  </div>
)

export default CoverImage