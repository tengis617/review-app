import React from 'react'

export default ({ url }) => (
  <div>{
    url ? 
    <img className="block h-24 rounded-full" src={url} />
    :
    <i className="fas fa-user text-5xl" />
  }
  </div>
)