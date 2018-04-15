import React from 'react'

export default ({ children, size }) => (
  <div className={`font-semibold text-${size}`}>
    {children}
  </div>
)